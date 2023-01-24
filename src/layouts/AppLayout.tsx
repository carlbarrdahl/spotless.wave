import Head from "next/head";
import { PropsWithChildren } from "react";

import { Waves } from "lucide-react";
import BaseLayout from "../layouts/BaseLayout";
import { Button } from "components/Button";

export const AppLayout = ({ children }: PropsWithChildren) => (
  <>
    <Head>
      <title>spotless.wave</title>
      <meta
        name="description"
        content="With spotless.wave, keeping our planet clean and healthy is as easy as a
        few taps on your smartphone. Join the spotless.wave movement today and
        make a difference in your community and the world."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <BaseLayout>
      <div className="flex flex-1 flex-col overflow-auto">
        <header className="p-2">
          <div className="flex items-center gap-1">
            <Button intent={"ghost"} size="sm">
              <Waves size={20} />
            </Button>
            <h1 className="font-bold">spotless.wave</h1>
          </div>
        </header>

        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </BaseLayout>
  </>
);

const Footer = () => (
  <footer className="text-center text-xs">
    <svg
      id="visual"
      viewBox="0 300 900 300"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <path
        d="M0 447L21.5 440.3C43 433.7 86 420.3 128.8 411.8C171.7 403.3 214.3 399.7 257.2 406.2C300 412.7 343 429.3 385.8 426.7C428.7 424 471.3 402 514.2 393.5C557 385 600 390 642.8 387.2C685.7 384.3 728.3 373.7 771.2 367.5C814 361.3 857 359.7 878.5 358.8L900 358L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="#22d3ee"
      ></path>
      <path
        d="M0 418L21.5 419C43 420 86 422 128.8 418.2C171.7 414.3 214.3 404.7 257.2 411.7C300 418.7 343 442.3 385.8 450.8C428.7 459.3 471.3 452.7 514.2 451.3C557 450 600 454 642.8 447.7C685.7 441.3 728.3 424.7 771.2 414C814 403.3 857 398.7 878.5 396.3L900 394L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="#19c2e0"
      ></path>
      <path
        d="M0 453L21.5 452.7C43 452.3 86 451.7 128.8 454.3C171.7 457 214.3 463 257.2 470.7C300 478.3 343 487.7 385.8 483.8C428.7 480 471.3 463 514.2 463.5C557 464 600 482 642.8 489.8C685.7 497.7 728.3 495.3 771.2 489.7C814 484 857 475 878.5 470.5L900 466L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="#12b1d1"
      ></path>
      <path
        d="M0 526L21.5 523.5C43 521 86 516 128.8 514.8C171.7 513.7 214.3 516.3 257.2 518.7C300 521 343 523 385.8 519.3C428.7 515.7 471.3 506.3 514.2 504.8C557 503.3 600 509.7 642.8 508C685.7 506.3 728.3 496.7 771.2 499.8C814 503 857 519 878.5 527L900 535L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="#0ca1c2"
      ></path>
      <path
        d="M0 531L21.5 538C43 545 86 559 128.8 563.8C171.7 568.7 214.3 564.3 257.2 556.3C300 548.3 343 536.7 385.8 539C428.7 541.3 471.3 557.7 514.2 559.3C557 561 600 548 642.8 540.5C685.7 533 728.3 531 771.2 534.5C814 538 857 547 878.5 551.5L900 556L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="#0891b2"
      ></path>
    </svg>
    <div className="-mt-4 text-white">
      powered by{" "}
      <a
        className="text-cyan-200"
        href={`https://hypercerts.xyz/`}
        target="_blank"
      >
        hypercerts
      </a>
    </div>
  </footer>
);