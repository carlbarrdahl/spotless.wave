import { ComponentPropsWithoutRef } from "react";

const P = (props: ComponentPropsWithoutRef<"p">) => (
  <p className="mb-4 leading-7" {...props} />
);

export const FAQ = () => (
  <details>
    <summary className="cursor-pointer select-none py-4 font-bold text-gray-600 hover:text-cyan-500">
      What is spotless.wave?
    </summary>
    <div>
      <P>
        spotless.wave is a mobile app that helps individuals and communities
        take action to clean up and preserve the environment. The app allows
        users to easily identify and report areas in need of cleaning, such as
        littered beaches, parks, and streets.
      </P>

      <P>
        Users can also join or create clean-up events, track their progress, and
        earn rewards for their contributions.
      </P>
      <P>
        With spotless.wave, keeping our planet clean and healthy is as easy as a
        few taps on your smartphone. Join the spotless.wave movement today and
        make a difference in your community and the world.
      </P>
    </div>
  </details>
);
