import { Card, CardHeader, CardBody } from "@nextui-org/card";

import { Homepage } from "@/components/homepage";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl pt-5 px-6 flex-grow">
      <Card className="">
        <CardHeader className="flex justify-center px-20 py-10">
          <div className="flex flex-col">
            <p className="text-3xl text-lime-500 text-center font-bold">
              The Decision Detox
            </p>
            <p className="text-3xl text-default-500 text-center font-bold lg:px-20">
              Start tonight with your personalized meal plan.
            </p>
          </div>
        </CardHeader>
        <CardBody className="px-20 bg-default-400/20 dark:bg-black/50">
          <Homepage />
        </CardBody>
      </Card>
    </div>
  );
}
