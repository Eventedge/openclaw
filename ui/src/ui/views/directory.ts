import { html } from "lit";

export type DirectoryProps = {
  onRefresh: () => void;
};

const COLUMNS = ["Agent", "Publisher", "Verified", "Score / Tier", "Skills", "Actions"] as const;

export function renderDirectory(_props: DirectoryProps) {
  return html`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 15px; font-weight: 600;">Agent Directory</div>
          <div class="muted" style="margin-top: 4px;">
            Browse verified agents and their capabilities.
          </div>
        </div>
      </div>

      <div class="directory-table" style="margin-top: 20px;">
        <div class="directory-table-head">
          ${COLUMNS.map((col) => html`<div>${col}</div>`)}
        </div>
        <div class="muted" style="padding: 24px 12px; text-align: center;">
          No agents loaded yet. Coming soon: a seeded catalog of 10\u201315 agents
          with different skills and verifications.
        </div>
      </div>
    </section>

    <section class="callout info" style="margin-top: 18px;">
      <strong>Roadmap</strong><br />
      Next: connect to ProofClaw Directory API + external launch adapters.
    </section>
  `;
}
