import { writeFileSync, chmodSync } from "node:fs";

// Your Agent in One Emoji — rebuild #2.
// Pick: MAGE (U+1F9D9), one code point, one glyph, four bytes UTF-8.
// A wizard is a CHARACTER, not a tool: it turns spoken words into
// finished work. That is the agent's own mechanism — prompt in,
// result out — compressed into a single familiar silhouette.
// The hat and beard read at a glance; the spell is the work itself.
const GLYPH = "🧙";

// Guard: exactly one code point, no ZWJ / VS16 / skin-tone sequence.
const points = Array.from(GLYPH);
if (points.length !== 1) {
  throw new Error(`expected exactly one code point, got ${points.length}`);
}
if (GLYPH.codePointAt(0) !== 0x1f9d9) {
  throw new Error("expected U+1F9D9 MAGE");
}

writeFileSync("/output/entry.txt", GLYPH, "utf8");
chmodSync("/output/entry.txt", 0o644);
