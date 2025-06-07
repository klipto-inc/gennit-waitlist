"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import { Mail, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteHeader } from "@/components/site-header";
import { toast, Toaster } from "sonner";

export default function Component() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [totalEmails, setTotalEmails] = useState<number>(0);

  const url =
    "https://gennit-server-hnfxc6bchxaaesey.canadacentral-01.azurewebsites.net/api/v1/";

  const handleEmailSubscriber = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!email || !emailRegex.test(email)) {
    //   setLoading(false);
    //   return;
    // }

    try {
      const response = await axios.post(`${url}waitlist/email`, { email });

      if (response.status === 201) {
        toast.success("You're now on the waitlist! 🎉");
        setEmail(""); // clear email field
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getTotalEmailList = async () => {
      try {
        const response = await axios.get(`${url}waitlist/all`);
        console.log("Total emails response:", response.data.waitlist.length);
        if (response.status === 200) {
          setTotalEmails(response.data.waitlist.length);
        }
      } catch (error) {
        console.error("Failed to fetch total emails:", error);
      }
    };

    if (url) {
      getTotalEmailList();
    }
  }, [url, handleEmailSubscriber]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>

        <div className="absolute top-1/3 left-1/2 w-px h-32 bg-white/10 transform -translate-x-1/2"></div>
        <div className="absolute top-2/3 left-1/4 w-24 h-px bg-white/10"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-px bg-white/10"></div>

        <div className="absolute top-12 left-12 w-6 h-6 border-l border-t border-white/20"></div>
        <div className="absolute top-12 right-12 w-6 h-6 border-r border-t border-white/20"></div>
        <div className="absolute bottom-12 left-12 w-6 h-6 border-l border-b border-white/20"></div>
        <div className="absolute bottom-12 right-12 w-6 h-6 border-r border-b border-white/20"></div>
      </div>

      <SiteHeader />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32">
        <div className="text-center my-16 max-w-4xl ">
          <h1 className="text-3xl md:text-7xl font-bold text-white leading-[0.9] mb-8 tracking-tight">
            Ship at the speed of
            <span className="text-white/90 font-light italic"> thought</span>
          </h1>
          <p className="text-gray-400 text-base md:text-2xl leading-relaxed max-w-2xl mx-auto font-light">
            Transform ideas into production-ready applications instantly. Zero
            setup, infinite possibilities.
          </p>
        </div>

        <form
          onSubmit={handleEmailSubscriber}
          className="w-full max-w-lg mb-16"
        >
          <div className="relative mb-4">
            <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 z-10" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="pl-14 pr-36 bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus-none h-16 text-base backdrop-blur-sm transition-all duration-300 rounded-2xl"
            />
            <Button
              className="absolute right-3 top-3 bottom-3 bg-white text-black hover:bg-gray-100 px-2 md:px-8 text-base font-medium transition-all duration-300 rounded-xl flex flex-row items-center justify-center"
              type="submit"
              disabled={loading}
            >
              <span className="hidden md:flex">Join</span>
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4 px-6 py-3 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-base font-medium text-white">
                  {totalEmails}
                </span>
                <span className="text-sm text-gray-400">joined</span>
              </div>
              <div className="w-px h-5 bg-white/10"></div>
              <span className="text-sm text-gray-500">
                No spam, unsubscribe anytime
              </span>
            </div>
          </div>
        </form>

        <div className="w-full max-w-7xl relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
            <img
              src="/images/demo.png"
              alt="Gennit Platform Interface - Build fullstack apps in seconds"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="my-16 flex items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <Zap className="w-4 h-4" />
            <span>Launching soon 🎉</span>
          </div>
          <div className="w-px h-5 bg-white/10"></div>
          <div>Built for everyone</div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-600 text-sm">
          Powered by{" "}
          <a
            href="#"
            className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
          >
            Klipto Inc
          </a>
        </p>
      </div>
      <Toaster position="bottom-center" richColors />
    </div>
  );
}
