// Demo attachments bundled with the app. The attachment list and detail sagas
// fall back to these when the template API (or the vault's IPFS content)
// can't be reached, so the documentation pages always have something to show.
import type { AttachmentModel } from "@/containers/attachments/types";
import appraisalReport from "./appraisal-report.pdf?no-inline";
import certificateOfAuthenticity from "./certificate-of-authenticity.pdf?no-inline";
import insuranceDocumentation from "./insurance-documentation.pdf?no-inline";
import originDocumentation from "./origin-documentation.pdf?no-inline";

/** Prefix marking a file `cid` as a bundled fixture rather than an IPFS CID. */
const FIXTURE_CID_PREFIX = "fixture:";

const fixtureFileUrls: Record<string, string> = {
  "certificate-of-authenticity.pdf": certificateOfAuthenticity,
  "appraisal-report.pdf": appraisalReport,
  "origin-documentation.pdf": originDocumentation,
  "insurance-documentation.pdf": insuranceDocumentation,
};

export const isFixtureCid = (cid: string) => cid.startsWith(FIXTURE_CID_PREFIX);

/** URL of a bundled fixture file, or undefined for a real IPFS CID. */
export const getFixtureFileUrl = (cid: string): string | undefined =>
  isFixtureCid(cid)
    ? fixtureFileUrls[cid.slice(FIXTURE_CID_PREFIX.length)]
    : undefined;

const fixtureAttachment = (
  index: number,
  name: string,
  description: string,
  filename: string,
  createdAt: string
): AttachmentModel => ({
  id: `fixture-${index}`,
  name,
  description,
  created_at: createdAt,
  ledger: "POLYGON_ZKEVM",
  status: "FILEDGR_DATA_ATTACHMENT_COMPLETED",
  tx_hash: null,
  file_count: 1,
  public_vault: true,
  stream: { asset_code: "FLDGR_bnePHi" },
  files: [
    {
      id: `fixture-${index}-file`,
      filename,
      mimetype: "application/pdf",
      created_at: createdAt,
      status: "FILEDGR_UPLOADED",
      cid: `${FIXTURE_CID_PREFIX}${filename}`,
    },
  ],
});

export const fixtureAttachments: AttachmentModel[] = [
  fixtureAttachment(
    1,
    "Certificate of Authenticity",
    "Confirms the natural pink diamonds and anchors the turtle's records in the Filedgr vault.",
    "certificate-of-authenticity.pdf",
    "2025-06-30T10:00:00Z"
  ),
  fixtureAttachment(
    2,
    "Appraisal Report",
    "Independent replacement-value appraisal of the stones and setting.",
    "appraisal-report.pdf",
    "2025-06-20T10:00:00Z"
  ),
  fixtureAttachment(
    3,
    "Origin Documentation",
    "Kimberley Process certified chain of custody from rough to finished piece.",
    "origin-documentation.pdf",
    "2025-06-18T10:00:00Z"
  ),
  fixtureAttachment(
    4,
    "Insurance Documentation",
    "All-risks cover in storage, on exhibition and in transit.",
    "insurance-documentation.pdf",
    "2025-06-25T10:00:00Z"
  ),
];

export const getFixtureAttachment = (id: string) =>
  fixtureAttachments.find((attachment) => attachment.id === id);
