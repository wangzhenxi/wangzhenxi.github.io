export const profile = {
  name: "joshwong",
  bio: "Developer.",
  githubUrl: "https://github.com/wangzhenxi",
  githubLabel: "github.com/wangzhenxi",
  wechatId: "the_best_josh",
} as const;

export async function copyWechatId(writeText: (value: string) => Promise<void>) {
  await writeText(profile.wechatId);
  return profile.wechatId;
}