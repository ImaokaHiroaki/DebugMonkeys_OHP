import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./_components/Button";
import StatusButton from "./_components/StatusButton";
import Spinner from "./_components/Spinner";
import { client } from "@/libs/client";
import { details } from "@/types/cms-types";

export default async function Home() {
  try {
    const data = await client.get({
      endpoint: `details/`,
    });

    return (
      <main className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 px-5 md:mt-20 md:grid-cols-2 md:gap-y-20 md:px-10 xl:grid-cols-3 xl:gap-x-16 xl:px-20">
        <Suspense fallback={<Spinner />}>
          {data.contents.map((game: details) => {
            return (
              <div key={game.id} className="grid gap-y-3">
                <Link
                  href={`/detail/${game.id}`}
                  className="group relative block h-[58vw] overflow-hidden rounded-md focus:outline-none focus-visible:ring md:h-[28vw] xl:h-[18vw]"
                >
                  <Image
                    src={game.thumb.url}
                    width={game.thumb.width}
                    height={game.thumb.height}
                    alt={`「${game.title}」の製品画像`}
                    className="absolute left-2/4 top-2/4 w-full -translate-x-2/4 -translate-y-2/4 transition duration-200 ease-in-out group-hover:scale-110 group-hover:bg-gray-100"
                  />
                </Link>
                <h2 className="mt-5 text-2xl font-bold text-gray-800 lg:mt-2">
                  {game.title}
                </h2>
                <p className="text-gray-800">{game.description}</p>
                <div className="mt-2 grid h-11 grid-cols-2 gap-5 lg:mt-0">
                  <StatusButton gameData={game} />
                  <Button link={`/detail/${game.id}`} color="gray">
                    詳細を見る
                  </Button>
                </div>
              </div>
            );
          })}
        </Suspense>
      </main>
    );
  } catch (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">エラーが発生しました。</h1>
      </div>
    );
  }
}
