import { useState, useRef, ChangeEvent } from "react";

import { Camera, Verified } from "lucide-react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileInput, Input, Textarea } from "components/Form";
import { Button } from "components/Button";
import { StaticMap } from "components/StaticMap";
import { parseExif } from "utils/exif";

const FormSchema = z.object({
  tags: z.string().nullish(),
  location: z
    .object({
      latitude: z.number(),
      longitude: z.number(),
    })
    .nullish(),
});

type FormProps = z.infer<typeof FormSchema>;

export const MintForm = ({
  onSubmit,
}: {
  onSubmit: SubmitHandler<FormProps>;
}) => {
  const { register, watch, setValue, handleSubmit } = useForm({
    resolver: zodResolver(FormSchema),
  });
  const [state, setState] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const upload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return null;

    setState(URL.createObjectURL(file));
    parseExif(file)
      .then((d) => {
        const { latitude, longitude, DateTimeOriginal = new Date() } = d;
        setValue("createdAt", DateTimeOriginal.toISOString());
        setValue("location", { latitude, longitude });
      })
      .catch(console.log);
  };

  function handleTakePhoto() {
    ref.current?.click();
  }

  const location = watch("location") as FormProps["location"];
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <img className="w-full" src={state} />
        {location ? <StaticMap {...location} /> : null}
      </div>
      <div className="flex flex-col gap-1 p-2">
        <FileInput
          ref={ref}
          name={"photo"}
          capture="environment"
          onChange={upload}
        />

        <fieldset>
          <label className="text-xs tracking-widest">Description</label>
          <Textarea
            {...register("description")}
            rows={4}
            placeholder="We found a lot of plastics washing up on the shore..."
          />
        </fieldset>
        <fieldset>
          <label className="text-xs tracking-widest">Tags</label>
          <Input
            pattern="^[a-zA-Z]+(,[a-zA-Z]+)*$"
            title="Comma-separated letters without spaces (eg: beach,plastics)."
            {...register("tags")}
            placeholder="beach,plastics"
          />
        </fieldset>
        <fieldset>
          <label className="text-xs tracking-widest">Participants</label>
          <Input
            pattern="^[a-zA-Z0-9]+(,[a-zA-Z0-9]+)*$"
            title="Comma-separated addresses or ens names without spaces (eg: name.eth,0x...)."
            {...register("tags")}
            placeholder="0x..."
          />
        </fieldset>
        <div className="mt-8 flex gap-1">
          <Button
            className="w-full"
            intent={"outline"}
            onClick={handleTakePhoto}
          >
            <Camera size={20} />
            Take photo
          </Button>
          <Button className="w-full" type="submit">
            <Verified />
            Mint
          </Button>
        </div>
      </div>
      {/* <pre className="text-xs">{JSON.stringify(watch(), null, 2)}</pre> */}
    </form>
  );
};
