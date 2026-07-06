export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">ContinueWith starter</p>
        <h1>Ship a landing page agents can continue in ChatGPT, Claude, and more.</h1>
        <p className="lead">
          This template includes the ContinueWith widget, a starter <code>/llms.txt</code>, and links to the AI Ready
          Index. Replace the demo site key with yours from the dashboard.
        </p>
        <div className="actions">
          <a className="button primary" href="https://continuewith.ai/dashboard">
            Get your site key
          </a>
          <a className="button" href="https://ready.continuewith.ai/scan">
            Scan AI readiness
          </a>
          <a className="button" href="https://continuewith.ai/docs/install">
            Install docs
          </a>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Widget installed</h2>
          <p>
            The script loads from <code>continuewith.ai/widget/v1.js</code> in <code>app/layout.tsx</code>. Run{' '}
            <code>npx continuewith verify</code> after changes.
          </p>
        </article>
        <article className="card">
          <h2>llms.txt</h2>
          <p>
            Edit <code>public/llms.txt</code> so crawlers and agents understand your product without parsing the whole
            DOM.
          </p>
        </article>
        <article className="card">
          <h2>AI Ready Index</h2>
          <p>
            List your site at{' '}
            <a href="https://ready.continuewith.ai/submit">ready.continuewith.ai/submit</a> for a public profile, badge,
            and Trust Score.
          </p>
        </article>
      </section>

      <footer>
        Built with{' '}
        <a href="https://github.com/continuewith-ai/starter-next">continuewith-ai/starter-next</a> · MIT
      </footer>
    </main>
  );
}
