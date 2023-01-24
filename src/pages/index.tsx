import { type NextPage } from "next";

import { AppLayout } from "layouts/AppLayout";
import { FAQ } from "components/FAQ";
import { MintForm } from "components/MintForm";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <MintForm
        onSubmit={(values) => {
          alert("Minting not implemented yet");
          // const tags = Array.from(
          //   new Set(values.tags?.split(",").filter(Boolean))
          // );
          // return null;
        }}
      />
      <div className="px-2">
        <FAQ />
      </div>
    </AppLayout>
  );
};

export default Home;
