import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("README timestamp regex does not swallow following markdown", () => {
  const helperSource = readFileSync(new URL("../.flue/lib/moco-api.ts", import.meta.url), "utf8");
  const regexLiteral = helperSource.match(/export const CHECK_TIMESTAMP_PATTERN =\n  (\/.*\/m);/)?.[1];
  assert.ok(regexLiteral);

  const pattern = Function(`return ${regexLiteral}`)();
  const readme =
    [
      "# Test",
      "",
      "Last MOCO API feature check with findings: never",
      "",
      "## Install",
      "",
    ].join("\n");
  const replacement = "Last MOCO API feature check with findings: 2026-05-08T18:19:15.395Z";

  assert.equal(
    readme.replace(pattern, replacement),
    [
      "# Test",
      "",
      "Last MOCO API feature check with findings: 2026-05-08T18:19:15.395Z",
      "",
      "## Install",
      "",
    ].join("\n"),
  );
});
