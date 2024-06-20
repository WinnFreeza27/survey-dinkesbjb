"use client"

import Image from "next/image";
import ResponsiveAppBar from "./components/navbar";
import { Card } from "@mui/material";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <ResponsiveAppBar />
      <main className="mt-4 sm:mt-10 flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl text-center sm:text-3xl">DINAS KESEHATAN KOTA BANJARBARU</h1>
        <div className="flex justify-center">
          <Link href="/skm">
            <Card className="cursor-pointer mt-10 p-3 rounded-sm">
              <img src="/skmicon.png" alt="skm logo" width={200} height={200}/>
              <div className="bg-darken-blue p-3 rounded-sm text-white">Survey Kepuasan Masyarakat</div>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  );
}
