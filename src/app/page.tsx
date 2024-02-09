'use client'

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useQuery } from "react-query";
import axios from "axios";
import { format, parseISO } from "date-fns";

// http://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56

type WeatherData = {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherInfo[];
  city: CityInfo;
};

type WeatherInfo = {
  dt: number;
  main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
  };
  weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
  }[];
  clouds: {
      all: number;
  };
  wind: {
      speed: number;
      deg: number;
      gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
      pod: string;
  };
  dt_txt: string;
};

type CityInfo = {
  id: number;
  name: string;
  coord: {
      lat: number;
      lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};


export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherData>(
    "repoData", 
    async () => {
      const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=cincinnati&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=2`);  // /data/2.5/forecast?q=${place}&appid=

      return data;
    }
    // queryFn: () =>
    //   fetch('http://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56').then((res) =>
    //     res.json(),
    //  ),
  );

  const firstData = data?.list[0]

  console.log("data", data)

  if (isLoading) 
    return (
      <div className="flex items-center min-h-screen justify-center">
        <p className="animate-bounce">Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/* Today data */}
        <section>
          <div>
            <h2 className="flex gap-1 text-2xl items-end">
              <p>{format(parseISO(firstData?.dt_txt ??''), "EEEE")} </p>
              <p className="text-lg">({format(parseISO(firstData?.dt_txt ??''), "dd.MM.yyyy")})</p>
            </h2>
            <div></div>
          </div>
        </section>

        {/* 7 day forecast data */}
        <section></section>
      </main>
    </div>
  );
}
