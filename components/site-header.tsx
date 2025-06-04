"use client"
import Link from "next/link"
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Building2,
  Users,
  Briefcase,
  BookOpen,
  FileText,
  MessageSquare,
  Layout,
  CreditCard,
  Building,
  BookText,
} from "lucide-react"
import { getCalApi } from "@calcom/embed-react";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="border border-white/10 rounded-3xl bg-[#0a0a0a]/95 backdrop-blur-xl px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center">
            <img
              src="./images/gennit.svg"
              alt="Logo"
              width="28"
              height="28"
              className="h-7 w-7"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-gray-200 hover:text-white text-sm font-medium data-[state=open]:bg-white/10 data-[state=open]:text-white border-none h-10 px-4 rounded-xl transition-all duration-300">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-1 p-6 w-[280px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/comingsoon"
                            className="flex items-start gap-4 select-none rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-200 group"
                          >
                            <div className="mt-1 bg-white/10 rounded-lg p-2 group-hover:bg-white/15 transition-colors duration-300">
                              <Building2 className="h-4 w-4 text-white" />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm font-semibold text-white group-hover:text-white">
                                About
                              </div>
                              <p className="line-clamp-2 text-xs text-gray-400 group-hover:text-gray-300">
                                Learn about our mission and vision for the
                                future
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/comingsoon"
                            className="flex items-start gap-4 select-none rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-200 group"
                          >
                            <div className="mt-1 bg-white/10 rounded-lg p-2 group-hover:bg-white/15 transition-colors duration-300">
                              <Users className="h-4 w-4 text-white" />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm font-semibold text-white group-hover:text-white">
                                Team
                              </div>
                              <p className="line-clamp-2 text-xs text-gray-400 group-hover:text-gray-300">
                                Meet the innovators behind the platform
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/careers"
                            className="flex items-start gap-4 select-none rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-200 group"
                          >
                            <div className="mt-1 bg-white/10 rounded-lg p-2 group-hover:bg-white/15 transition-colors duration-300">
                              <Briefcase className="h-4 w-4 text-white" />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm font-semibold text-white group-hover:text-white">
                                Careers
                              </div>
                              <p className="line-clamp-2 text-xs text-gray-400 group-hover:text-gray-300">
                                Join our mission to revolutionize development
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-gray-200 hover:text-white text-sm font-medium data-[state=open]:bg-white/10 data-[state=open]:text-white border-none h-10 px-4 rounded-xl transition-all duration-300">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-1 p-6 w-[300px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/comingsoon"
                            className="flex items-start gap-4 select-none rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-200 group"
                          >
                            <div className="mt-1 bg-white/10 rounded-lg p-2 group-hover:bg-white/15 transition-colors duration-300">
                              <FileText className="h-4 w-4 text-white" />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm font-semibold text-white group-hover:text-white">
                                Blog
                              </div>
                              <p className="line-clamp-2 text-xs text-gray-400 group-hover:text-gray-300">
                                Latest insights and development trends
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/docs"
                            className="flex items-start gap-4 select-none rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-200 group"
                          >
                            <div className="mt-1 bg-white/10 rounded-lg p-2 group-hover:bg-white/15 transition-colors duration-300">
                              <BookOpen className="h-4 w-4 text-white" />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm font-semibold text-white group-hover:text-white">
                                Documentation
                              </div>
                              <p className="line-clamp-2 text-xs text-gray-400 group-hover:text-gray-300">
                                Comprehensive guides and API references
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/community"
                            className="flex items-start gap-4 select-none rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-200 group"
                          >
                            <div className="mt-1 bg-white/10 rounded-lg p-2 group-hover:bg-white/15 transition-colors duration-300">
                              <MessageSquare className="h-4 w-4 text-white" />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm font-semibold text-white group-hover:text-white">
                                Community
                              </div>
                              <p className="line-clamp-2 text-xs text-gray-400 group-hover:text-gray-300">
                                Connect with developers worldwide
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/comingsoon"
                            className="flex items-start gap-4 select-none rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-200 group"
                          >
                            <div className="mt-1 bg-white/10 rounded-lg p-2 group-hover:bg-white/15 transition-colors duration-300">
                              <Layout className="h-4 w-4 text-white" />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm font-semibold text-white group-hover:text-white">
                                Templates
                              </div>
                              <p className="line-clamp-2 text-xs text-gray-400 group-hover:text-gray-300">
                                Ready-to-use project templates
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/comingsoon" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-white/10 text-gray-200 hover:text-white text-sm font-medium border-none h-10 px-4 rounded-xl transition-all duration-300"
                      )}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center">
          <Button
            size="sm"
            className="bg-white text-black hover:bg-gray-100 rounded-xl h-10 px-6 text-sm font-semibold transition-all duration-300"
            data-cal-namespace="30min"
            data-cal-link="klipto-ng-5ied8w/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Book Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-gray-300 hover:text-white hover:bg-white/10 rounded-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 border border-white/10 rounded-3xl bg-[#0a0a0a]/95 backdrop-blur-xl">
          <div className="p-6 space-y-4">
            <div className="space-y-3">
              <div className="text-sm font-semibold text-white px-4 py-2 flex items-center gap-2">
                <Building className="h-4 w-4" />
                Company
              </div>
              <Link
                href="/comingsoon"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                <Building2 className="h-4 w-4" />
                About
              </Link>
              <Link
                href="/comingsoon"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                <Users className="h-4 w-4" />
                Team
              </Link>
              <Link
                href="/comingsoon"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                <Briefcase className="h-4 w-4" />
                Careers
              </Link>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold text-white px-4 py-2 flex items-center gap-2">
                <BookText className="h-4 w-4" />
                Resources
              </div>
              <Link
                href="/comingsoon"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                <FileText className="h-4 w-4" />
                Blog
              </Link>
              <Link
                href="/comingsoon"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                <BookOpen className="h-4 w-4" />
                Documentation
              </Link>
              <Link
                href="/comingsoon"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                <MessageSquare className="h-4 w-4" />
                Community
              </Link>
              <Link
                href="/comingsoon"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                <Layout className="h-4 w-4" />
                Templates
              </Link>
            </div>

            <Link
              href="/comingsoon"
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              <CreditCard className="h-4 w-4" />
              Pricing
            </Link>

            <div className="pt-4 border-t border-white/10">
              <Button
                size="sm"
                className="w-full bg-white text-black hover:bg-gray-100 rounded-xl h-10 text-sm font-semibold transition-all duration-300"
                data-cal-namespace="30min"
                data-cal-link="klipto-ng-5ied8w/30min"
                data-cal-config='{"layout":"month_view"}'
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
