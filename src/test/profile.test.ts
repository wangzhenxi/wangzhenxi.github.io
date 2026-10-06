import { describe, expect, it, vi } from "vitest";

import { copyWechatId, profile } from "@/lib/profile";

describe("personal card details", () => {
  it("uses the requested public profile values", () => {
    expect(profile.name).toBe("joshwong");
    expect(profile.bio).toBe("Developer.");
    expect(profile.githubUrl).toBe("https://github.com/wangzhenxi");
    expect(profile.wechatId).toBe("the_best_josh");
  });

  it("copies the exact WeChat ID", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);

    await copyWechatId(writeText);

    expect(writeText).toHaveBeenCalledOnce();
    expect(writeText).toHaveBeenCalledWith("the_best_josh");
  });
});