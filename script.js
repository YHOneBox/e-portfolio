/* Lightweight UI: theme, mobile nav, project case-study dialog, footer year */

const PROJECTS = {
    handwriting: {
        kicker: "Feb 2024 – Dec 2024 · 11 months",
        title: "Intelligent Handwriting Correction",
        html: `
            <h3>Context &amp; problem</h3>
            <p>Students needed handwriting feedback that improved legibility without flattening personal writing style. Generic OCR or font-matching tools treated style as noise instead of a constraint.</p>
            <h3>My role &amp; contributions</h3>
            <p>Designed the learning setup around standard Chinese glyphs in multiple writing styles. Built CNN classification plus a Pix2Pix / cGAN correction path so the system could evaluate a sample and propose a corrected glyph in near real time.</p>
            <h3>Technical stack</h3>
            <p>Python, TensorFlow, CNN, cGAN, Pix2Pix.</p>
            <h3>Impact &amp; results</h3>
            <!-- SWAP: replace with measured accuracy, latency, classroom pilots, etc. -->
            <p>Delivered a working pipeline for font discrimination, live assessment, and style-preserving correction over an 11-month build. Demo walkthrough is available on video.</p>
            <div class="dialog-links">
                <a class="btn btn-secondary" href="https://www.youtube-nocookie.com/embed/Q9f0xyXfUW4" target="_blank" rel="noopener noreferrer">Watch demo</a>
            </div>
        `
    },
    imagen: {
        kicker: "Dec 2024 · 14 days",
        title: "AI Image Generation Studio",
        html: `
            <h3>Context &amp; problem</h3>
            <p>Concept-art iteration was too slow for design exploration. The team needed a local, style-flexible generator rather than a black-box website.</p>
            <h3>My role &amp; contributions</h3>
            <p>Stood up a Stable Diffusion workflow with a simple preview UI, style options, and Hugging Face model integration so non-ML teammates could produce usable stills quickly.</p>
            <h3>Technical stack</h3>
            <p>Python, PyTorch, Stable Diffusion, Hugging Face.</p>
            <h3>Impact &amp; results</h3>
            <p>Shipped in 14 days with high-quality still generation, multiple styles, and a low-friction operator interface.</p>
            <div class="dialog-links">
                <a class="btn btn-primary" href="https://github.com/YHOneBox/AI-Application-project" target="_blank" rel="noopener noreferrer">GitHub repository</a>
                <a class="btn btn-secondary" href="https://www.youtube-nocookie.com/embed/A0r_gUpiiYs" target="_blank" rel="noopener noreferrer">Watch demo</a>
            </div>
        `
    },
    dragon: {
        kicker: "Feb 2024 – May 2025 · 15 months",
        title: "Dawn of the Dragon (龍の曙光)",
        html: `
            <h3>Context &amp; problem</h3>
            <p>Needed a complete 2D game loop — exploration, puzzles, combat, and story — that could be demoed as a coherent product rather than disconnected prototypes.</p>
            <h3>My role &amp; contributions</h3>
            <p>Owned all Unity C# development: world traversal, combat, puzzle logic, narrative progression, and playtest fixes across a 15-month cycle.</p>
            <h3>Technical stack</h3>
            <p>Unity, C#.</p>
            <h3>Impact &amp; results</h3>
            <p>Delivered a playable RPG with exploration, combat, puzzles, and story beats, documented through a public gameplay video.</p>
            <div class="dialog-links">
                <a class="btn btn-secondary" href="https://www.youtube.com/embed/2PWibz-tJFM" target="_blank" rel="noopener noreferrer">Watch gameplay</a>
            </div>
        `
    },
    cardio: {
        kicker: "May 2023 – Jun 2023 · 1 month",
        title: "Cardiovascular Risk Prediction",
        html: `
            <h3>Context &amp; problem</h3>
            <p>Users needed a simple way to register, store health-related inputs, and see a cardiovascular risk estimate without a native app.</p>
            <h3>My role &amp; contributions</h3>
            <p>Implemented front-end flows, PHP/MySQL persistence, authentication, and the prediction display end to end.</p>
            <h3>Technical stack</h3>
            <p>JavaScript, HTML, CSS, PHP, MySQL.</p>
            <h3>Impact &amp; results</h3>
            <p>Shipped a working web app with registration, login, data management, and risk output in a one-month academic sprint.</p>
            <div class="dialog-links">
                <a class="btn btn-primary" href="https://github.com/YHOneBox/WebProgram_Final" target="_blank" rel="noopener noreferrer">GitHub repository</a>
                <a class="btn btn-secondary" href="https://www.youtube-nocookie.com/embed/UtwxLswCfac" target="_blank" rel="noopener noreferrer">Watch demo</a>
            </div>
        `
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    setupNotice();
    setupTheme();
    setupNav();
    setupScrollSpy();
    setupProjectDialog();
});

function setupNotice() {
    const notice = document.getElementById("update-notice");
    const closeBtn = document.getElementById("update-notice-close");
    const key = "updateNoticeDismissed";
    if (!notice) return;

    if (sessionStorage.getItem(key) === "1") {
        notice.classList.add("is-hidden");
    } else {
        document.body.classList.add("has-update-notice");
    }

    closeBtn?.addEventListener("click", () => {
        notice.classList.add("is-hidden");
        document.body.classList.remove("has-update-notice");
        sessionStorage.setItem(key, "1");
    });
}

function setupTheme() {
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");
    const stored = localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = stored || (prefersLight ? "light" : "dark");

    applyTheme(initial);

    toggle?.addEventListener("click", () => {
        const next = root.dataset.theme === "light" ? "dark" : "light";
        applyTheme(next);
        localStorage.setItem("theme", next);
    });

    function applyTheme(theme) {
        root.dataset.theme = theme;
        const toLight = theme === "dark";
        toggle?.setAttribute("aria-pressed", String(theme === "light"));
        toggle?.setAttribute("aria-label", toLight ? "Switch to light mode" : "Switch to dark mode");
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", theme === "light" ? "#f4f1ea" : "#0b0d12");
    }
}

function setupNav() {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("site-nav");
    const links = nav?.querySelectorAll("a") ?? [];

    const close = () => {
        nav?.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
        toggle?.setAttribute("aria-label", "Open navigation menu");
    };

    toggle?.addEventListener("click", () => {
        const open = !nav?.classList.contains("is-open");
        nav?.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    });

    links.forEach((link) => {
        link.addEventListener("click", () => close());
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") close();
    });
}

function setupScrollSpy() {
    const sections = ["about", "projects", "resume", "contact"]
        .map((id) => document.getElementById(id))
        .filter(Boolean);
    const links = [...document.querySelectorAll(".nav-list a")];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((link) => {
                const active = link.getAttribute("href") === `#${entry.target.id}`;
                if (active) link.setAttribute("aria-current", "page");
                else link.removeAttribute("aria-current");
            });
        });
    }, { rootMargin: "-45% 0px -45% 0px" });

    sections.forEach((section) => observer.observe(section));
}

function setupProjectDialog() {
    const dialog = document.getElementById("project-dialog");
    const title = document.getElementById("dialog-title");
    const kicker = document.getElementById("dialog-kicker");
    const body = document.getElementById("dialog-body");
    const closeBtn = dialog?.querySelector("[data-close-dialog]");

    document.querySelectorAll("[data-project]").forEach((button) => {
        button.addEventListener("click", () => {
            const data = PROJECTS[button.dataset.project];
            if (!data || !dialog) return;
            kicker.textContent = data.kicker;
            title.textContent = data.title;
            body.innerHTML = data.html;
            if (typeof dialog.showModal === "function") dialog.showModal();
        });
    });

    closeBtn?.addEventListener("click", () => dialog?.close());
    dialog?.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
    });
}
