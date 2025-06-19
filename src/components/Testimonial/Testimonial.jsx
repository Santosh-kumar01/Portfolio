import React from 'react';
import SparklesText from '../ui/sparkles-text';
import { cn } from "@/lib/utils";
import Marquee from '../ui/marquee';

// Reviews Data
const reviews = [
  { name: "Ravi Jaiswal👨🏻‍💻", username: "@jais_ravi", body: "Looks great!✨ Keep building 👍", img: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321605/jaiswal_ravi_ca1mr0.jpg" },
  { name: "Khushi Gupta🧑‍💻", username: "@Khushi_gupta", body: "I love how responsive and fast this app is! 🫠", img: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321607/khushi_kr_xnrqo6.jpg" },
  { name: "Prince Kumar Yadav👨🏻‍💻", username: "@Prince_kr_yadav", body:"A great bug solver 🤩", img: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321609/Prince_ohvzbk.jpg" },
  { name: "Anshika Kumari🧑‍💻", username: "@Kumari_anshika", body: "Great use of Tailwind CSS for styling 🔥", img: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321605/Anshika_cgrhtm.jpg" },
  { name: "Sahil Priyadarshi👨🏻‍💻", username: "priyadarshi_sahil", body:"Incredibly talented and hardworking 💥", img: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321610/Sahil_chfbux.jpg" },
  { name: "Shanvi Kumari🧑‍💻", username: "@shanviii", body: "Your codebase is well 👌", img: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321611/shanvi_kumari_kkq3bi.jpg" },
  { name: "Yash Kumar👨🏻‍💻", username: "@Kr_Yash", body: "You’ve chosen the perfect tech stack for scalability! 💻", img: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321615/Yash_fmgcvy.jpg" },
  { name: "Parwati Kumari🧑‍💻", username: "@Parwati_Kumari", body: "It’s impressive how much functionality 💯", img: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321608/Parwati_mmeqkp.jpg" },
  { name: "Rishi Raj👨🏻‍💻", username: "@rock_rishi_raj", body: "Security is well-implemented 🥰", img: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321610/Rishi_raj_dkp2e2.jpg" },
  { name: "Rupam Kumari🧑‍💻", username: "@rupam_kumari", body: "Optimized perfectly for both desktop and mobile users 🤳", img: "https://res.cloudinary.com/dlp9tgx5b/image/upload/v1750321610/Rupam_ejaxcv.jpg" },

];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// ReviewCard Component
const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-auto",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

// MarqueeDemo Component
export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
    <Marquee pauseOnHover className="[--duration:20s]">
      {firstRow.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </Marquee>
    <Marquee reverse pauseOnHover className="[--duration:20s]">
      {secondRow.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </Marquee>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-pink-200 dark:from-pink-700"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-pink-200 dark:from-pink-700"></div>
  </div>
  );
}

// Testimonial Component
const Testimonial = () => {
  return (
    <div className="w-full contain mt-14 bg-violet-50 py-14 flex flex-col items-center text-center" id="testimonial">
      <div className="font-serif space-y-6 w-full max-w-4xl px-4">
        <SparklesText text="Testimonial" />
        <p className="text-3xl sm:text-4xl font-serif font-semibold underline text-violet-800">What People Are Saying</p>
        <p className="text-lg sm:text-xl font-serif font-semibold text-violet-800">
          Don&apos;t just take our word for it. Here&apos;s what <span className="text-red-400">real people</span> are saying about me.
        </p>
      </div>
      <MarqueeDemo />
    </div>
  );
};

export default Testimonial;
