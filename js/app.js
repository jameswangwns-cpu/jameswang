const app = {
    init: function () {
        this.cacheDOM();
        this.bindEvents();
        this.handleRoute();
    },

    cacheDOM: function () {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.content = document.getElementById('content');
    },

    bindEvents: function () {
        window.addEventListener('hashchange', this.handleRoute.bind(this));
    },

    handleRoute: function () {
        const hash = window.location.hash.slice(1) || 'home';

        // Handle blog post routes like #blog/my-post.md
        if (hash.startsWith('blog/')) {
            const postId = hash.split('/')[1];
            this.renderBlogPost(postId);
            this.updateNav('blog');
            return;
        }

        this.updateNav(hash);

        switch (hash) {
            case 'home':
                this.renderHome();
                break;
            case 'experiences':
                this.renderExperiences();
                break;
            case 'portfolio':
                this.renderPortfolio();
                break;
            case 'blog':
                this.renderBlogList();
                break;
            default:
                this.renderHome();
        }
    },

    updateNav: function (tab) {
        this.navLinks.forEach(link => {
            if (link.dataset.tab === tab) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    renderHome: function () {
        this.content.innerHTML = `
            <section style="text-align: center; padding: 4rem 0;">
                <h1 style="font-size: 3rem; margin-bottom: 1rem;">Hi, I'm James Wang.</h1>
                <p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto; opacity: 0.8;">
                    I am a finance professional focused on valuation, strategic investment analysis, and executing corporate transactions.
                </p>
                <div style="margin-top: 2rem;">
                    <a href="#portfolio" class="btn">View My Work</a>
                </div>
            </section>
        `;
    },

    renderExperiences: function () {
        this.content.innerHTML = `
            <section style="max-width: 800px; margin: 0 auto;">
                <h2 style="margin-bottom: 2rem; border-bottom: 2px solid var(--color-accent); padding-bottom: 0.5rem;">My Experiences</h2>
                
                <!-- Work Experience -->
                <div class="experience-section" style="margin-bottom: 3rem;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-briefcase" style="color: var(--color-accent);"></i> Work Experience
                    </h3>
                    
                    <div style="margin-bottom: 2rem; padding-left: 1rem; border-left: 2px solid var(--color-border);">
                        <h4 style="font-size: 1.2rem;">Corporate Finance Analyst (Freelance)</h4>
                        <p style="font-style: italic; color: var(--color-accent); margin-bottom: 0.5rem;">Preface AI | London, UK | 10/2025 - Present</p>
                        <ul style="list-style-position: inside; margin-left: 0.5rem;">
                            <li>Developing detailed financial projection models integrating three-statement forecasts with strategic growth plans.</li>
                            <li>Overseeing data room management and investor communications across six active counterparties.</li>
                            <li>Preparing audit documentation and supporting schedules, facilitating external audit completion.</li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 2rem; padding-left: 1rem; border-left: 2px solid var(--color-border);">
                        <h4 style="font-size: 1.2rem;">Off-Cycle Investment Analyst</h4>
                        <p style="font-style: italic; color: var(--color-accent); margin-bottom: 0.5rem;">UCEA Capital Partners | London, UK | 04/2025 - 10/2025</p>
                        <ul style="list-style-position: inside; margin-left: 0.5rem;">
                            <li>Conducted due diligence for 11 PE and VC investments across healthcare, tech, and consumer sectors.</li>
                            <li>Presented two investment opportunities to the Investment Committee; one deal approved and executed.</li>
                            <li>Built and managed relationships with over 20 VCs and institutional investors.</li>
                            <li><strong>Deal Experience:</strong> €10M Fundraising of French TBI-Drugs Company.</li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 2rem; padding-left: 1rem; border-left: 2px solid var(--color-border);">
                        <h4 style="font-size: 1.2rem;">Audit Associate, Financial Service Team</h4>
                        <p style="font-style: italic; color: var(--color-accent); margin-bottom: 0.5rem;">PricewaterhouseCoopers (PwC) | Taipei, Taiwan | 03/2024 - 08/2024</p>
                        <ul style="list-style-position: inside; margin-left: 0.5rem;">
                            <li>Prepared and analyzed financial reports for three clients, ensuring compliance with IFRS standards.</li>
                            <li>Streamlined financial tracking for new clients by creating standardized templates and VBA programmes, cutting report preparation time by 25%.</li>
                            <li>Analyzed financial structure and operational performance using key financial ratios.</li>
                        </ul>
                    </div>
                </div>

                <!-- Education -->
                <div class="experience-section" style="margin-bottom: 3rem;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-graduation-cap" style="color: var(--color-accent);"></i> Education
                    </h3>
                    
                    <div style="margin-bottom: 2rem; padding-left: 1rem; border-left: 2px solid var(--color-border);">
                        <h4 style="font-size: 1.2rem;">MSc Finance (Asset Pricing)</h4>
                        <p style="font-style: italic; color: var(--color-accent);">King’s College London | 09/2024 - 01/2026</p>
                        <p><strong>Modules:</strong> Asset Pricing, Investment Analysis, Portfolio Management, Computational Finance, Financial Econometrics</p>
                        <p><strong>Dissertation:</strong> Pairs Trading – Performance in the Covid-19 Pandemic Period in the UK Equity Market</p>
                        <a href="https://uk-pairs-trading.streamlit.app/" target="_blank" style="color: var(--color-text); text-decoration: underline; font-weight: 600; display: inline-block; margin-top: 0.5rem;">View Project Dashboard &rarr;</a>
                    </div>

                    <div style="margin-bottom: 2rem; padding-left: 1rem; border-left: 2px solid var(--color-border);">
                        <h4 style="font-size: 1.2rem;">B.A. Economics</h4>
                        <p style="font-style: italic; color: var(--color-accent);">National Taipei University | 09/2019 - 06/2023</p>
                        <p><strong>Modules:</strong> Macroeconomics, Investment Analysis, Financial Market Analysis, Statistics, Calculus, Intermediate Accounting</p>
                    </div>
                </div>

                <!-- Project Experience -->
                <div class="experience-section" style="margin-bottom: 3rem;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-project-diagram" style="color: var(--color-accent);"></i> Project Experience
                    </h3>
                    
                    <div style="margin-bottom: 2rem; padding-left: 1rem; border-left: 2px solid var(--color-border);">
                        <h4 style="font-size: 1.2rem;">King's Investment Fund (KIF)</h4>
                        <p style="font-style: italic; color: var(--color-accent); margin-bottom: 0.5rem;">Portfolio Manager & Equity Research Analyst | 10/2024 - 06/2025</p>
                        <ul style="list-style-position: inside; margin-left: 0.5rem;">
                            <li>Managed a long-only European equity portfolio, achieving a 35.97% period return (Sharpe Ratio: 2.94).</li>
                            <li>Constructed portfolio using Equally Weighted, Minimum Variance, Risk Parity, and Max Sharpe Ratio methodologies.</li>
                            <li>Conducted bottom-up stock pitches with in-depth fundamental research and DCF analysis.</li>
                        </ul>
                        <a href="kif.html" style="color: var(--color-text); text-decoration: underline; font-weight: 600; display: inline-block; margin-top: 0.5rem;">View KIF Reports &rarr;</a>
                    </div>

                    <div style="margin-bottom: 2rem; padding-left: 1rem; border-left: 2px solid var(--color-border);">
                        <h4 style="font-size: 1.2rem;">External Audit for Taiwanese Public Digital Bank</h4>
                        <p style="font-style: italic; color: var(--color-accent); margin-bottom: 0.5rem;">01/2025 - 06/2025</p>
                        <ul style="list-style-position: inside; margin-left: 0.5rem;">
                            <li>Assessed investing activities by reviewing $374K in financial assets.</li>
                            <li>Designed audit procedures in compliance with regulations, identifying 4 significant operational issues.</li>
                        </ul>
                    </div>
                </div>

                <!-- Skills -->
                <div class="experience-section">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-tools" style="color: var(--color-accent);"></i> Skills & Interests
                    </h3>
                    <ul style="list-style-position: inside; line-height: 1.6;">
                        <li><strong>Financial Modelling:</strong> 3-Statements Forecast, Valuation Modeling (DCF, LBO, Comparable Analysis), Merger Models, Scenario Analysis.</li>
                        <li><strong>Technical Skills:</strong> Excel, PowerPoint, Bloomberg Terminal, LSEG Workspace, Pitchbook, Python (NumPy, Pandas, Matplotlib), C++, VBA, Stata.</li>
                        <li><strong>Languages:</strong> English (Fluent), Mandarin (Native), Taiwanese (Native), Japanese (Beginner).</li>
                        <li><strong>Interests:</strong> Piano, Volleyball, Rock Band, Badminton.</li>
                    </ul>
                </div>
            </section>
        `;
    },

    renderPortfolio: function () {
        // Use global data from data.js
        const projects = window.portfolioData || [];

        if (projects.length === 0) {
            this.content.innerHTML = '<p style="text-align: center;">No projects found.</p>';
            return;
        }

        const gridHtml = projects.map(project => `
            <article class="portfolio-card">
                <div class="portfolio-img" style="background-image: url('${project.image}'); background-size: cover; background-position: center;"></div>
                <div class="portfolio-content">
                    <span style="font-size: 0.8rem; color: var(--color-accent); text-transform: uppercase; letter-spacing: 1px;">${project.category}</span>
                    <h3 class="portfolio-title">${project.title}</h3>
                    <p class="portfolio-desc">${project.description}</p>
                    <a href="${project.link}" target="_blank" class="btn" style="font-size: 0.9rem; padding: 0.5rem 1rem;">View Project</a>
                </div>
            </article>
        `).join('');

        this.content.innerHTML = `
            <h2 style="margin-bottom: 2rem; text-align: center;">My Portfolio</h2>
            <div class="portfolio-grid">
                ${gridHtml}
            </div>
        `;
    },

    renderBlogList: function () {
        // Use global data from data.js
        const posts = window.blogIndex || [];

        if (posts.length === 0) {
            this.content.innerHTML = '<p style="text-align: center;">No articles found.</p>';
            return;
        }

        const listHtml = posts.map(post => `
            <article class="blog-item" onclick="window.location.hash = 'blog/${post.filename}'">
                <div class="blog-date">${post.date}</div>
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
            </article>
        `).join('');

        this.content.innerHTML = `
            <h2 style="margin-bottom: 2rem; text-align: center;">Latest Articles</h2>
            <div class="blog-list">
                ${listHtml}
            </div>
        `;
    },

    renderBlogPost: async function (filename) {
        this.content.innerHTML = '<p style="text-align: center;">Loading post...</p>';

        try {
            // Check if content is available in data.js (for local file support)
            const post = window.blogIndex.find(p => p.filename === filename);
            if (post && post.content) {
                this.content.innerHTML = `
                    <div style="margin-bottom: 2rem;">
                        <a href="#blog" style="color: var(--color-accent); text-decoration: none;">&larr; Back to Blog</a>
                    </div>
                    <div class="markdown-body">
                        ${marked.parse(post.content)}
                    </div>
                `;
                return;
            }

            // Fallback to fetch (requires server)
            const response = await fetch(`content/blog/${filename}`);
            if (!response.ok) throw new Error('Post not found');
            const markdown = await response.text();

            this.content.innerHTML = `
                <div style="margin-bottom: 2rem;">
                    <a href="#blog" style="color: var(--color-accent); text-decoration: none;">&larr; Back to Blog</a>
                </div>
                <div class="markdown-body">
                    ${marked.parse(markdown)}
                </div>
            `;
        } catch (error) {
            console.error('Error loading post:', error);
            this.content.innerHTML = `
                <div style="text-align: center; color: var(--color-text);">
                    <p style="color: red; margin-bottom: 1rem;">Failed to load article.</p>
                    <p style="font-size: 0.9rem; opacity: 0.8;">
                        If you are opening this file directly (file://), browser security may block loading external files.<br>
                        Please use a local server or view the embedded posts.
                    </p>
                </div>
            `;
        }
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
