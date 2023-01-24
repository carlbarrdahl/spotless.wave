import { type NextPage } from "next";

import { AppLayout } from "layouts/AppLayout";
import { FAQ } from "components/FAQ";
import { MintForm } from "components/MintForm";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <MintForm
        onSubmit={(values) => {
          const tags = Array.from(
            new Set(values.tags?.split(",").filter(Boolean))
          );
        }}
      />
      <FAQ />
    </AppLayout>
  );
};

export default Home;
