import { createFileRoute } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Check, Copy, Github, QrCode, X } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";

import avatarUrl from "@/assets/joshwong-avatar.jpg";
import qrUrl from "@/assets/joshwong-wechat-qr.jpg";
import { Button } from "@/components/ui/button";
import { copyWechatId, profile } from "@/lib/profile";

const SITE_URL = "https://www.wangzhenxi.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "joshwong — Developer" },
      { name: "description", content: "joshwong 的个人名片。Developer、GitHub 与微信联系方式。" },
      { property: "og:title", content: "joshwong — Developer" },
      { property: "og:description", content: "joshwong 的个人名片、GitHub 与微信联系方式。" },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}${avatarUrl}` },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "1024" },
      { property: "og:image:alt", content: "joshwong 的头像" },
      { property: "og:site_name", content: "joshwong" },
      { property: "og:locale", content: "zh_CN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}${avatarUrl}` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Developer",
          url: SITE_URL,
          image: `${SITE_URL}${avatarUrl}`,
          sameAs: [profile.githubUrl],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await copyWechatId((value) => navigator.clipboard.writeText(value));
      setCopied(true);
      toast.success("微信号已复制");
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="relative flex h-dvh items-center justify-center overflow-hidden bg-background px-5 py-10 sm:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-border" />

      <article className="card-fit animate-card-enter relative w-full max-w-xl">
        <header className="flex flex-col items-center text-center">
          <img
            src={avatarUrl}
            alt="joshwong 的头像"
            className="h-28 w-28 rounded-full border border-border object-cover shadow-soft sm:h-32 sm:w-32"
          />
          <h1 className="mt-7 text-4xl font-bold text-foreground sm:text-5xl">{profile.name}</h1>
          <p className="mt-3 text-lg font-medium text-muted-foreground">{profile.bio}</p>
        </header>

        <section aria-label="联系方式" className="mt-12 border-y border-border">
          <div className="flex min-h-20 items-center gap-4 border-b border-border py-4">
            <button
              type="button"
              onClick={handleCopy}
              className="group flex min-w-0 flex-1 cursor-pointer items-center gap-4 rounded-md text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`复制微信号 ${profile.wechatId}`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary" aria-hidden="true">
                {copied ? <Check size={20} strokeWidth={2} /> : <Copy size={19} strokeWidth={1.8} />}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase text-muted-foreground">WeChat</span>
                <span className="mt-1 block truncate text-base font-semibold">{profile.wechatId}</span>
              </span>
            </button>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Button variant="icon" size="icon" aria-label="显示微信二维码" title="微信二维码">
                  <QrCode size={20} strokeWidth={1.8} />
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-40 bg-foreground/25 backdrop-blur-md data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out data-[state=open]:fade-in" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-popover p-6 text-popover-foreground shadow-dialog outline-none data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Dialog.Title className="text-xl font-bold">微信二维码</Dialog.Title>
                      <Dialog.Description className="mt-1 text-sm text-muted-foreground">扫码添加 {profile.name}</Dialog.Description>
                    </div>
                    <Dialog.Close asChild>
                      <Button variant="close" size="icon" aria-label="关闭二维码弹窗">
                        <X size={18} />
                      </Button>
                    </Dialog.Close>
                  </div>
                  <img src={qrUrl} alt={`${profile.name} 的微信二维码`} className="mt-6 aspect-square w-full rounded-2xl border border-border object-cover" />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-20 items-center gap-4 rounded-md py-4 outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary" aria-hidden="true">
              <Github size={20} strokeWidth={1.8} />
            </span>
            <span className="min-w-0 flex-1 text-left">
              <span className="block text-xs font-semibold uppercase text-muted-foreground">GitHub</span>
              <span className="mt-1 block truncate text-base font-semibold">{profile.githubLabel}</span>
            </span>
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors duration-200 group-hover:bg-accent"
              aria-hidden="true"
            >
              <ArrowUpRight size={20} strokeWidth={1.8} />
            </span>
          </a>
        </section>
      </article>
    </main>
  );
}
