(() => {
  const image = {
    journal: "https://images.unsplash.com/photo-1685478237575-d79da41ba341?auto=format&fit=crop&w=2200&q=82",
    desk: "https://images.unsplash.com/photo-1767216516661-deb40df6f489?auto=format&fit=crop&w=2200&q=82",
    hands: "https://images.unsplash.com/photo-1771440047966-c498de469922?auto=format&fit=crop&w=2200&q=82",
    redTools: "https://images.unsplash.com/photo-1771440048219-9db5129167fd?auto=format&fit=crop&w=2200&q=82",
    goldTools: "https://images.unsplash.com/photo-1688565826068-f3f79f724a9d?auto=format&fit=crop&w=2200&q=82",
    pastel: "https://images.unsplash.com/photo-1764818958908-d5efcec563d1?auto=format&fit=crop&w=2200&q=82",
    workshop: "https://images.unsplash.com/photo-1766932901295-d4185660341b?auto=format&fit=crop&w=2200&q=82",
    handmade: "https://unsplash.com/photos/Ka1nkR5U7F4/download?force=true&w=1800",
    texture: "https://unsplash.com/photos/ISIJfoE626Q/download?force=true&w=1800",
    floralBook: "https://unsplash.com/photos/dQzBpNfjNkE/download?force=true&w=1800",
    storage: "https://unsplash.com/photos/VMe9WlhA93o/download?force=true&w=1800",
    washi: "https://unsplash.com/photos/nxFeMHnu2BA/download?force=true&w=1800",
    vintage: "https://unsplash.com/photos/wkICQ7ooLZc/download?force=true&w=2200",
    collage: "https://unsplash.com/photos/ug_WtjzDnW4/download?force=true&w=2200",
    openBook: "https://unsplash.com/photos/fMkO2pnEiK0/download?force=true&w=2200"
  };

  const imageSets = {
    paper: [image.journal, image.handmade, image.floralBook],
    tools: [image.hands, image.redTools, image.goldTools],
    studio: [image.desk, image.storage, image.pastel],
    gallery: [image.floralBook, image.collage, image.vintage],
    workshop: [image.workshop, image.hands, image.desk],
    texture: [image.texture, image.pastel, image.washi],
    story: [image.openBook, image.vintage, image.journal]
  };

  const navItems = [
    ["Home", "index.html", "home"],
    ["Home 2", "home2.html", "home2"],
    ["About", "about.html", "about"],
    ["Collections", "collections.html", "collections"],
    ["Craft Tools", "craft-tools.html", "tools"],
    ["Inspiration Gallery", "inspiration-gallery.html", "gallery"],
    ["Workshops", "workshops.html", "workshops"],
    ["Pricing", "pricing.html", "pricing"],
    ["Contact", "contact.html", "contact"]
  ];

  const pages = {
    home: {
      hero: {
        eyebrow: "Scrapbook supply boutique",
        title: "Craft Beautiful Stories by Hand",
        copy: "Craft beautiful stories with premium papers and tools. Join our curated workshops to master the art of layered memory keeping.",
        image: image.journal,
        ctas: [["Shop Collections", "collections.html"], ["Book a Workshop", "workshops.html"]]
      },
      sections: [
        {
          kind: "cards",
          eyebrow: "Featured paper collections",
          title: "Layered papers with quiet luxury in every sheet.",
          copy: "Build heirloom pages with coordinated palettes, deckled textures, journaling cards, and limited seasonal prints.",
          images: imageSets.paper,
          items: [
            item("Blush Archive", "Vintage roses, ledger paper, and pearl vellum for romantic layouts.", "24 sheets", "$18", image.floralBook, "layers"),
            item("Sage Botanical", "Pressed leaf motifs, soft grid backs, and calm green solids.", "30 sheets", "$22", image.openBook, "new"),
            item("Weekend Stories", "Warm neutrals, tiny labels, and photo-ready title pieces.", "kit", "$34", image.journal, "bundle")
          ]
        },
        {
          kind: "slider",
          eyebrow: "Bestselling craft tools",
          title: "Precision tools that make paper feel effortless.",
          copy: "From compact die-cut machines to delicate scoring boards, our tools are chosen for clean results and beautiful studio presence.",
          images: imageSets.tools,
          items: [
            item("PetalPress Mini Die-Cut", "Compact plate system for tags, titles, and layered florals.", "machine", "$129", image.goldTools, "popular"),
            item("Soft-Edge Trimmer", "Clean cuts with measured guide rails and a cushioned grip.", "tool", "$29", image.hands, "studio"),
            item("Ribbon Score Board", "Crisp folds for envelopes, mini albums, and cards.", "board", "$32", image.redTools, "essential"),
            item("Detail Tweezer Set", "Angled, rounded, and fine-tip tweezers for tiny embellishments.", "set", "$16", image.storage, "new")
          ]
        },
        {
          kind: "masonry",
          eyebrow: "DIY inspiration gallery",
          title: "Pinterest-style ideas for journals, tags, and keepsake pages.",
          copy: "Explore layouts shaped by texture, negative space, handwritten notes, and small details that make every project feel personal.",
          images: [image.floralBook, image.collage, image.vintage, image.handmade, image.openBook, image.texture]
        },
        {
          kind: "events",
          eyebrow: "Upcoming workshops",
          title: "Gather around the crop table and leave with finished pages.",
          copy: "Small-group sessions include materials, technique demos, table space, and a gentle creative pace.",
          images: imageSets.workshop,
          items: [
            eventItem("Memory Keeper Crop Night", "May 16", "6:00 PM", "Layered layouts, shared supplies, and a tea bar."),
            eventItem("Die-Cut Florals Lab", "May 22", "4:30 PM", "Build dimensional petals, vines, and title clusters."),
            eventItem("Washi Weekend", "May 30", "11:00 AM", "Pattern mixing, tape borders, tabs, and mini albums.")
          ]
        },
        {
          kind: "testimonials",
          eyebrow: "Customer love",
          title: "Warm words from makers who found their studio rhythm.",
          copy: "Our community comes for premium supplies and stays for the welcoming, artful pace of the workshops.",
          images: imageSets.studio,
          items: [
            quote("Every kit feels curated, never random. My pages finally look cohesive without losing personality.", "Mina R."),
            quote("The crop night gave me room to finish a family album I had avoided for two years.", "Tess A."),
            quote("The paper quality is gorgeous, and the color stories are soft without feeling ordinary.", "Leah N.")
          ]
        },
      ]
    },
    home2: {
      hero: {
        eyebrow: "Premium boutique edition",
        title: "Design, Layer & Inspire",
        copy: "A cinematic paper studio experience for makers who want curated kits, tactile artistry, and workshops that feel like a creative retreat.",
        image: image.texture,
        ctas: [["Explore Seasonal Kits", "collections.html"], ["Reserve Studio Time", "workshops.html"]]
      },
      sections: [
        {
          kind: "slider",
          eyebrow: "Interactive craft collection showcase",
          title: "Swipe through color stories made for modern memory keeping.",
          copy: "Each collection balances statement sheets with quiet supporting textures so every page feels composed.",
          images: imageSets.texture,
          items: [
            item("Rosewater Ledger", "Soft rose papers with stamped notes, vellum overlays, and number tabs.", "collection", "$26", image.texture, "limited"),
            item("Garden Room", "Sage florals, botanical labels, and layered cream solids.", "collection", "$28", image.openBook, "editorial"),
            item("Tea Table", "Warm letterpress patterns, ivory tags, and tiny caption strips.", "collection", "$24", image.vintage, "classic"),
            item("Pressed Bloom", "Floral ephemera, envelope pockets, and delicate journaling blocks.", "collection", "$31", image.floralBook, "new")
          ]
        },
        {
          kind: "cards",
          eyebrow: "Seasonal scrapbook kits",
          title: "Everything coordinated, measured, and ready for a beautiful afternoon.",
          copy: "Our kits include paper, embellishments, trims, prompts, and a studio recipe card for confident layering.",
          images: imageSets.paper,
          items: [
            item("Spring Keepsake Box", "Soft botanical layers for milestones, garden notes, and weekend photos.", "12 projects", "$48", image.floralBook, "seasonal"),
            item("Market Morning Mini", "Envelope album, tape tabs, label stickers, and citrus-toned details.", "album", "$42", image.desk, "fresh"),
            item("Heritage Pages", "Vintage paper, delicate frames, and guided prompts for family stories.", "album kit", "$56", image.vintage, "premium")
          ]
        },
        {
          kind: "masonry",
          eyebrow: "Layered inspiration boards",
          title: "A gallery built for saving, pinning, and recreating.",
          copy: "Browse dimensional clusters, textured borders, pocket pages, and editorial still life ideas.",
          images: [image.journal, image.floralBook, image.washi, image.collage, image.pastel, image.openBook, image.handmade]
        },
        {
          kind: "slider",
          eyebrow: "Animated product highlights",
          title: "Small tools, big studio confidence.",
          copy: "Hover-lift cards, soft transitions, and image reveals showcase the pieces makers ask for most.",
          images: imageSets.tools,
          items: [
            item("Botanical Die Pack", "Layered bloom dies sized for cards, journals, and title clusters.", "12 dies", "$36", image.goldTools, "top rated"),
            item("Cream Binder Rings", "Minimal rings for flip books, swatch decks, and mini albums.", "24 pack", "$12", image.storage, "studio"),
            item("Sage Detail Knife", "Balanced craft knife with replacement blades and storage cap.", "tool", "$18", image.redTools, "precise"),
            item("Rose Tape Library", "Curated washi roll set with solids, tiny florals, and grid trims.", "8 rolls", "$26", image.washi, "catalog")
          ]
        },
        {
          kind: "events",
          eyebrow: "Community workshop moments",
          title: "Premium studio sessions with room for play.",
          copy: "Our crop events combine guided demos with generous open making time and boutique supplies at each table.",
          images: imageSets.workshop,
          items: [
            eventItem("Cinematic Crop Retreat", "June 6", "10:00 AM", "A full-day album sprint with curated kits and lunch."),
            eventItem("Paper Florals Intensive", "June 13", "1:00 PM", "Dimensional die-cut petals, shaping, and composition."),
            eventItem("Golden Hour Journal Club", "June 20", "5:30 PM", "Handmade inserts, pocket pages, and reflective prompts.")
          ]
        },
      ]
    },
    collections: {
      hero: {
        eyebrow: "Collections and catalogs",
        title: "Creative Scrapbook Supplies for Every Artist",
        copy: "Browse paper packs, washi libraries, sticker sheets, embellishments, and complete kits in cohesive boutique palettes.",
        image: image.floralBook,
        ctas: [["Browse Paper Packs", "#seasonal-paper-collections"], ["Build a Kit", "pricing.html"]]
      },
      sections: [
        {
          id: "seasonal-paper-collections",
          kind: "cards",
          eyebrow: "Seasonal paper collections",
          title: "Fresh releases for spring pages, holiday albums, and everyday stories.",
          copy: "Limited-run packs combine hero patterns, soft solids, journaling cards, and vellum separators.",
          images: imageSets.paper,
          items: [
            item("Spring Letterpress", "Floral grids, torn-edge labels, and warm ivory textures.", "30 sheets", "$24", image.floralBook, "spring"),
            item("Late Summer Notes", "Soft sun-washed pages with sage borders and story cards.", "24 sheets", "$21", image.desk, "seasonal"),
            item("Fireside Archive", "Muted ledger papers, kraft accents, and layered photo mats.", "kit", "$36", image.vintage, "heritage")
          ]
        },
        {
          kind: "feature",
          eyebrow: "Floral and vintage themes",
          title: "Romantic motifs with space for real photographs and handwriting.",
          copy: "Our floral and vintage edits are designed with balanced contrast, so busy pages never overwhelm the memories.",
          images: imageSets.story,
          items: [
            mini("Muted botanical prints", "Build soft borders and pockets without visual clutter."),
            mini("Antique ledger sheets", "Add age, texture, and quiet structure to every spread."),
            mini("Soft neutral backers", "Keep photo stories grounded and easy to read.")
          ]
        },
        {
          kind: "cards",
          eyebrow: "Stickers and embellishments",
          title: "Tiny finishing details with a polished handmade feel.",
          copy: "Choose enamel dots, phrase stickers, label tabs, paper clips, florals, and dimensional frames.",
          images: [image.handmade, image.goldTools, image.pastel],
          items: [
            item("Phrase Sticker Book", "Soft captions, date labels, and story prompts.", "8 sheets", "$14", image.handmade, "stickers"),
            item("Petal Ephemera", "Layered blooms, vellum leaves, and tiny tags.", "72 pcs", "$12", image.floralBook, "floral"),
            item("Gold Studio Clips", "Minimal accents for pockets, inserts, and tags.", "20 pcs", "$10", image.goldTools, "accent")
          ]
        },
        {
          kind: "slider",
          eyebrow: "Washi tape catalog",
          title: "Peel, layer, tab, and border with curated tape stories.",
          copy: "Our washi catalog balances quiet solids with tiny motifs, grids, botanicals, and soft blush patterns.",
          images: [image.washi, image.pastel, image.texture],
          items: [
            item("Rose Grid Set", "Clean grid tapes for labels, tabs, and photo corners.", "6 rolls", "$19", image.washi, "rose"),
            item("Sage Garden Set", "Leafy strips, soft solids, and delicate dotted borders.", "8 rolls", "$24", image.pastel, "sage"),
            item("Vintage Caption Set", "Ledger, cream, and typewriter-inspired tapes.", "5 rolls", "$17", image.vintage, "journal"),
            item("Tiny Bloom Set", "Micro-floral tapes for cards, planners, and mini albums.", "7 rolls", "$22", image.texture, "new")
          ]
        },
        {
          kind: "pricing",
          eyebrow: "Scrapbook kit bundles",
          title: "Bundled materials for makers who want a complete creative session.",
          copy: "Pick a bundle by project size, then add extras only when inspiration asks for them.",
          images: imageSets.studio,
          plans: [
            plan("Mini Album Kit", "$42", "One keepsake album", ["Pre-cut papers", "Tabs and labels", "Washi starter roll"]),
            plan("Memory Month Kit", "$68", "Four coordinated spreads", ["30 patterned sheets", "Sticker book", "Ephemera pack"], true),
            plan("Heritage Box", "$96", "Archival family album", ["Premium textures", "Gold clip accents", "Prompt cards"])
          ]
        },
      ]
    },
    tools: {
      hero: {
        eyebrow: "Craft tools and accessories",
        title: "Precision Tools for Clean Cuts & Soft Folds",
        copy: "Discover die-cut machines, trimmers, scoring boards, storage pieces, and beginner essentials for refined paper crafting.",
        image: image.hands,
        ctas: [["Shop Craft Tools", "#die-cut-machines"], ["See Demos", "#tool-demonstration-gallery"]]
      },
      sections: [
        {
          id: "die-cut-machines",
          kind: "cards",
          eyebrow: "Die-cut machines",
          title: "Compact machines for florals, titles, tags, and dimensional paper details.",
          copy: "Choose manual and electric formats sized for home studios, classroom tables, and crop events.",
          images: imageSets.tools,
          items: [
            item("PetalPress Mini", "Small-format die-cut machine with smooth pressure and quiet plates.", "manual", "$129", image.goldTools, "popular"),
            item("StudioPress Wide", "Wider mouth for full borders, nested frames, and album covers.", "manual", "$189", image.redTools, "pro"),
            item("BloomCut Electric", "Button-driven cutting for frequent makers and workshop tables.", "electric", "$269", image.hands, "premium")
          ]
        },
        {
          kind: "cards",
          eyebrow: "Crafting accessories",
          title: "The small pieces that make a project feel precise.",
          copy: "Mats, blades, tweezers, rulers, adhesives, and brush sets chosen for everyday making.",
          images: [image.goldTools, image.redTools, image.storage],
          items: [
            item("Self-Healing Mat", "Soft sage grid mat with clear measurements and sturdy edges.", "18 x 24", "$34", image.hands, "essential"),
            item("Detail Knife Kit", "Balanced handle, ten replacement blades, and covered storage.", "11 pcs", "$18", image.redTools, "precise"),
            item("Gold Ruler Pair", "Straight and cork-backed rulers for trimming and tearing.", "2 pack", "$16", image.goldTools, "studio")
          ]
        },
        {
          kind: "feature",
          eyebrow: "Storage solutions",
          title: "Keep tapes, dies, papers, and embellishments visible without clutter.",
          copy: "Our storage edit favors clear containers, labeled folios, vertical paper files, and tool rolls that look calm on open shelves.",
          images: [image.storage, image.desk, image.pastel],
          items: [
            mini("Clear embellishment boxes", "Stack tiny details without losing sight of the palette."),
            mini("Vertical paper files", "Keep collections sorted by theme, season, and project."),
            mini("Tool roll inserts", "Carry knives, tweezers, and rulers to crop events.")
          ]
        },
        {
          id: "tool-demonstration-gallery",
          kind: "masonry",
          eyebrow: "Tool demonstration gallery",
          title: "Before, during, and after details from the craft table.",
          copy: "See clean cuts, folded pockets, layered die-cuts, and trimming setups in real studio use.",
          images: [image.hands, image.redTools, image.goldTools, image.storage, image.washi, image.pastel]
        },
        {
          kind: "cards",
          eyebrow: "Beginner essentials",
          title: "Start with a focused toolkit instead of a crowded cart.",
          copy: "These dependable basics help new paper crafters cut, fold, adhere, and organize with confidence.",
          images: imageSets.texture,
          items: [
            item("First Crop Toolkit", "Trimmer, adhesive, tweezers, bone folder, and mat.", "bundle", "$72", image.goldTools, "starter"),
            item("Pocket Page Starter", "Corner rounder, label tabs, clear pockets, and prompts.", "bundle", "$44", image.journal, "easy"),
            item("Card Maker Set", "Score board, envelope guide, tape, and phrase stickers.", "bundle", "$58", image.pastel, "cards")
          ]
        },
      ]
    },
    gallery: {
      hero: {
        eyebrow: "Inspiration gallery",
        title: "Scrapbook Layouts, Journals & DIY Ideas",
        copy: "A warm visual library of layered pages, seasonal paper projects, handmade journals, and community-made details.",
        image: image.collage,
        ctas: [["Open Gallery", "#scrapbook-layout-ideas"], ["Join a Workshop", "workshops.html"]]
      },
      sections: [
        {
          id: "scrapbook-layout-ideas",
          kind: "masonry",
          eyebrow: "Scrapbook layout ideas",
          title: "Pages shaped by balance, texture, and negative space.",
          copy: "Click any image to preview it in the lightbox and imagine your next story layer.",
          images: [image.journal, image.floralBook, image.vintage, image.handmade, image.pastel, image.texture]
        },
        {
          kind: "feature",
          eyebrow: "Handmade journal inspiration",
          title: "Mini albums, pocket pages, and everyday books with editorial polish.",
          copy: "Use vellum dividers, folded pockets, caption labels, and washi hinges to make journals feel tactile and personal.",
          images: imageSets.story,
          items: [
            mini("Pocket-page rhythm", "Alternate photo windows, tags, and patterned inserts."),
            mini("Soft cover layers", "Wrap cardstock with torn paper, tape, and a label frame."),
            mini("Prompt-led pages", "Start with one sentence and let the layout follow.")
          ]
        },
        {
          kind: "cards",
          eyebrow: "Seasonal DIY projects",
          title: "Fresh projects for gifts, gatherings, and memory boxes.",
          copy: "From place cards to layered tags, these projects are designed for beautiful results in one sitting.",
          images: imageSets.texture,
          items: [
            item("Pressed Flower Tags", "Layer vellum, botanical paper, and tiny twine details.", "45 min", "$12", image.floralBook, "gift"),
            item("Market Mini Album", "A small accordion book for everyday photos and receipts.", "90 min", "$18", image.journal, "album"),
            item("Tea Table Cards", "Soft folded cards with washi borders and phrase stickers.", "60 min", "$15", image.pastel, "cards")
          ]
        },
        {
          kind: "cards",
          eyebrow: "Video tutorials preview",
          title: "Technique previews for layering, cutting, and finishing.",
          copy: "Each preview leads into a workshop topic, so you can learn a technique and then practice it in studio.",
          images: imageSets.tools,
          items: [
            item("Washi Tape Peel Borders", "Create soft edges, removable tabs, and layered frames.", "8 min", "Watch", image.washi, "video"),
            item("Die-Cut Dimensional Blooms", "Shape petals and stack foam dots without bulk.", "12 min", "Watch", image.goldTools, "video"),
            item("Balanced Photo Clusters", "Arrange three photos with labels, titles, and space.", "10 min", "Watch", image.collage, "video")
          ]
        },
        {
          kind: "masonry",
          eyebrow: "Community showcase",
          title: "Finished projects from crop nights and journal clubs.",
          copy: "A rotating gallery of maker-submitted layouts, handmade books, and workshop table moments.",
          images: [image.workshop, image.hands, image.handmade, image.openBook, image.storage, image.desk]
        },
      ]
    },
    workshops: {
      hero: {
        eyebrow: "Workshops and crop events",
        title: "Reserve a Seat at the Creative Table",
        copy: "Join intimate paper crafting workshops with curated supplies, guided techniques, generous crop time, and a welcoming studio community.",
        image: image.workshop,
        ctas: [["View Schedule", "#event-schedule-calendar"], ["Register Now", "contact.html"]]
      },
      sections: [
        {
          kind: "events",
          eyebrow: "Upcoming crop events",
          title: "Bring your photos, choose a kit, and finish meaningful pages.",
          copy: "Crop events include table space, shared tools, kit discounts, and gentle guidance from our studio hosts.",
          images: imageSets.workshop,
          items: [
            eventItem("Open Crop Friday", "May 15", "5:30 PM", "Three-hour open table with shared tools and tea."),
            eventItem("Family Album Saturday", "May 23", "10:00 AM", "Guided planning for heritage and milestone pages."),
            eventItem("Mini Album Social", "May 29", "6:00 PM", "Build a pocket-sized keepsake with pre-cut supplies.")
          ]
        },
        {
          kind: "cards",
          eyebrow: "Workshop categories",
          title: "Choose a class by technique, project, or creative mood.",
          copy: "Our categories make it easy to find a session that fits your skill level and available time.",
          images: [image.floralBook, image.washi, image.goldTools],
          items: [
            item("Die-Cut Florals", "Dimensional blooms, layered greenery, and shaped petals.", "beginner", "$38", image.goldTools, "technique"),
            item("Journal Binding", "Folded inserts, stitched spines, and pocket signatures.", "all levels", "$52", image.openBook, "journal"),
            item("Washi Composition", "Borders, tabs, hinges, and soft pattern mixing.", "quick class", "$28", image.washi, "tape")
          ]
        },
        {
          id: "event-schedule-calendar",
          kind: "calendar",
          eyebrow: "Event schedule calendar",
          title: "May studio calendar with featured craft nights.",
          copy: "Use the highlighted dates to plan crop nights, technique labs, and community making sessions.",
          images: imageSets.studio
        },
        {
          kind: "cards",
          eyebrow: "Instructor highlights",
          title: "Kind, detail-oriented artists who make techniques approachable.",
          copy: "Each instructor brings a signature style while keeping the room calm, clear, and creatively generous.",
          images: [image.hands, image.journal, image.storage],
          items: [
            item("Avery Bloom", "Known for romantic mini albums and quiet layered compositions.", "albums", "Mentor", image.floralBook, "artist"),
            item("Nora Vellum", "Die-cut specialist with crisp demos and clever tool shortcuts.", "tools", "Mentor", image.goldTools, "artist"),
            item("Sasha Reed", "Journaling coach focused on prompts, photos, and story rhythm.", "story", "Mentor", image.openBook, "artist")
          ]
        },
        {
          kind: "masonry",
          eyebrow: "Crafting community moments",
          title: "Studio tables, shared supplies, and projects in progress.",
          copy: "See the warm, welcoming atmosphere that makes our events feel like a creative reset.",
          images: [image.workshop, image.hands, image.redTools, image.desk, image.storage, image.journal]
        },
      ]
    },
    pricing: {
      hero: {
        eyebrow: "Pricing and plans",
        title: "Simple Pricing for Kits & Workshops",
        copy: "Compare workshop tickets, scrapbook kits, tool bundles, and membership plans designed for casual makers and devoted memory keepers.",
        image: image.pastel,
        ctas: [["Compare Plans", "#pricing-cards"], ["Ask a Question", "contact.html"]]
      },
      sections: [
        {
          id: "pricing-cards",
          kind: "pricing",
          eyebrow: "Pricing cards",
          title: "Choose the path that matches your creative season.",
          copy: "Start with a one-time ticket or unlock regular studio time with a membership plan.",
          images: imageSets.texture,
          plans: [
            plan("Workshop Ticket", "$38", "Single studio class", ["All shared tools", "Technique demo", "10% supply credit"]),
            plan("Creative Member", "$49/mo", "Monthly maker plan", ["One crop night", "15% kits discount", "Early workshop booking"], true),
            plan("Studio Circle", "$96/mo", "Premium membership", ["Two workshops", "Tool library access", "Quarterly kit box"])
          ]
        },
        {
          kind: "comparison",
          eyebrow: "Membership comparison",
          title: "See what is included before you reserve your spot.",
          copy: "Memberships are built for makers who want steady creative time, curated supplies, and early access to new releases.",
          images: imageSets.studio,
          headers: ["Feature", "Workshop Ticket", "Creative Member", "Studio Circle"],
          rows: [
            ["Monthly crop seat", "Add-on", "Included", "Two included"],
            ["Kit discount", "10%", "15%", "20%"],
            ["Tool library", "Shared in class", "Limited access", "Priority access"],
            ["Workshop booking", "Standard", "Early", "First access"]
          ]
        },
        {
          kind: "cards",
          eyebrow: "Seasonal discounts",
          title: "Thoughtful offers for project planning and gifting.",
          copy: "Bundle savings rotate with each seasonal collection and studio calendar.",
          images: [image.floralBook, image.washi, image.storage],
          items: [
            item("Kit Pair Savings", "Buy two seasonal kits and save on coordinating tapes.", "save 15%", "$82", image.floralBook, "bundle"),
            item("Tool Starter Week", "Beginner tool bundles include a complimentary tape roll.", "save 20%", "$72", image.goldTools, "starter"),
            item("Crop With a Friend", "Two workshop tickets with shared table treats.", "pair", "$68", image.workshop, "event")
          ]
        },
        {
          kind: "faq",
          eyebrow: "FAQ",
          title: "Helpful details before you buy or book.",
          copy: "A few common questions about kits, workshops, memberships, and materials.",
          images: imageSets.paper,
          faqs: [
            faq("Can I attend a workshop as a beginner?", "Yes. Each class includes a clear demo, shared tools, and enough guided time for first-time paper crafters."),
            faq("Are supplies included in workshop tickets?", "Core supplies are included. Specialty kits and optional upgrades are listed on each workshop card."),
            faq("Can I pause a membership?", "Monthly memberships can be paused once per quarter with seven days notice before the next billing date."),
            faq("Do kit bundles include instructions?", "Yes. Every kit includes a studio recipe card with layout prompts, cutting notes, and layering ideas.")
          ]
        },
        {
          kind: "testimonials",
          eyebrow: "Pricing testimonials",
          title: "Makers say the bundles help them finish more projects.",
          copy: "Coordinated pricing keeps creative decisions simple while still leaving room to personalize.",
          images: imageSets.workshop,
          items: [
            quote("The member discount paid for itself because I finally stopped buying mismatched extras.", "Rina L."),
            quote("The kit pricing is clear, and everything inside is usable. No filler sheets.", "Cam W."),
            quote("I love booking classes early. It keeps a creative night on my calendar.", "Jo M.")
          ]
        },
      ]
    },
    about: {
      hero: {
        eyebrow: "Our studio story",
        title: "A Boutique Studio for Modern Makers",
        copy: "Paperie & Petal began as a small crop table and grew into a warm destination for curated papers, refined tools, and creative connection.",
        image: image.openBook,
        ctas: [["Meet the Studio", "#brand-story"], ["Visit Us", "contact.html"]]
      },
      sections: [
        {
          id: "brand-story",
          kind: "feature",
          eyebrow: "Brand story",
          title: "We believe paper turns ordinary moments into keepsakes.",
          copy: "Our store was built around the feeling of a finished page: layered, personal, tactile, and worth returning to.",
          images: imageSets.story,
          items: [
            mini("Curated over crowded", "Every collection earns its place by pairing beautifully with what makers already own."),
            mini("Handmade over hurried", "We design workshops around calm progress and finished projects."),
            mini("Premium but welcoming", "Elegant materials should still feel approachable and useful.")
          ]
        },
        {
          kind: "cards",
          eyebrow: "Creative mission",
          title: "Make memory keeping feel beautiful, modern, and doable.",
          copy: "We help makers find supplies that support their voice instead of overwhelming the page.",
          images: imageSets.paper,
          items: [
            item("Thoughtful Color Stories", "Rose and sage palettes with warm neutrals and subtle contrast.", "design", "Core", image.texture, "palette"),
            item("Technique Confidence", "Clear demos and project recipes for repeatable results.", "learning", "Core", image.hands, "skills"),
            item("Community Tables", "Small sessions where makers can ask, share, and finish.", "studio", "Core", image.workshop, "people")
          ]
        },
        {
          kind: "masonry",
          eyebrow: "Studio showcase",
          title: "Shelves of paper, shared tools, and warm creative corners.",
          copy: "Our studio is styled like a boutique stationery atelier, with practical work zones and inspiration everywhere.",
          images: [image.storage, image.desk, image.goldTools, image.journal, image.pastel, image.washi]
        },
        {
          kind: "cards",
          eyebrow: "Team and artists",
          title: "A small team of makers, teachers, and paper collectors.",
          copy: "We bring together artists who care about composition, kindness, and the tiny details that make projects sing.",
          images: [image.hands, image.workshop, image.openBook],
          items: [
            item("Elena Hart", "Founder and collection curator with a love of quiet editorial pages.", "curator", "Lead", image.journal, "founder"),
            item("Mara Finch", "Workshop host specializing in layered florals and vellum techniques.", "artist", "Host", image.floralBook, "teacher"),
            item("Theo Vale", "Tool specialist who keeps demo stations smooth and beginner-friendly.", "tools", "Guide", image.goldTools, "mentor")
          ]
        },
        {
          kind: "feature",
          eyebrow: "Community impact",
          title: "We create space for stories that deserve to be held.",
          copy: "Each quarter, we donate workshop seats to local memory projects and collect supplies for school and community art rooms.",
          images: imageSets.workshop,
          items: [
            mini("240 donated workshop seats", "Community makers, caregivers, and teachers join at no cost."),
            mini("38 supply drives", "Paper, adhesives, and tools are routed to local art rooms."),
            mini("12 memory projects", "Guided albums help preserve family and community histories.")
          ]
        },
      ]
    },
    contact: {
      hero: {
        eyebrow: "Contact and visits",
        title: "Questions, Custom Kits & Workshop Reservations",
        copy: "Reach out about products, private events, workshop seats, kit pairing, or visiting the Paperie & Petal boutique studio.",
        image: image.desk,
        ctas: [["Send a Message", "#contact-form"], ["View Hours", "#business-hours"]]
      },
      sections: [
        {
          id: "contact-form",
          kind: "contact",
          eyebrow: "Contact form",
          title: "Tell us what you are hoping to make.",
          copy: "We can help pair paper collections, suggest tools, plan private workshops, and answer product questions.",
          images: imageSets.studio
        },
        {
          kind: "feature",
          eyebrow: "Store location",
          title: "Visit our warm paper studio in the maker district.",
          copy: "Paperie & Petal Studio, 214 Rose Lane, Suite 3, Portland, OR 97205. Street parking and bike racks are available nearby.",
          images: [image.storage, image.desk, image.workshop],
          items: [
            mini("Boutique shelves", "Browse paper collections, tapes, stickers, and ready-made kits."),
            mini("Demo table", "Try scoring, trimming, and die-cut tools before choosing."),
            mini("Workshop room", "Reserve table seats for public classes or private groups.")
          ]
        },
        {
          id: "business-hours",
          kind: "comparison",
          eyebrow: "Business hours",
          title: "Open hours for shopping, pickups, and crop events.",
          copy: "Workshop nights may run later than retail hours. Private events are available by request.",
          images: imageSets.paper,
          headers: ["Day", "Open", "Close"],
          rows: [
            ["Tuesday", "10:00 AM", "5:00 PM"],
            ["Wednesday", "10:00 AM", "5:00 PM"],
            ["Thursday", "11:00 AM", "7:00 PM"],
            ["Friday", "10:00 AM", "8:00 PM"],
            ["Saturday", "9:00 AM", "4:00 PM"]
          ]
        },
        {
          kind: "faq",
          eyebrow: "Contact FAQ",
          title: "Fast answers before you call or send a note.",
          copy: "Here are the questions we hear most about visits, registration, and custom kit help.",
          images: imageSets.texture,
          faqs: [
            faq("Can I book a private crop night?", "Yes. Private workshop and crop table bookings are available for six to sixteen guests."),
            faq("Do you offer curbside pickup?", "Yes. Choose pickup at checkout and we will email when your kit or tool order is ready."),
            faq("Can you help match paper to photos?", "Absolutely. Bring sample photos or upload references through the contact form and we will suggest a color story."),
            faq("Are children welcome in workshops?", "Family workshops are marked on the schedule. Adult sessions are designed for makers sixteen and older.")
          ]
        },
        {
          kind: "masonry",
          eyebrow: "Social media showcase",
          title: "Follow the newest shelves, project reels, and workshop table moments.",
          copy: "Our social feed highlights seasonal kits, maker projects, and quick paper crafting tutorials.",
          images: [image.journal, image.washi, image.floralBook, image.workshop, image.goldTools, image.handmade]
        },
      ]
    }
  };

  function item(title, text, meta, price, img, tag) {
    return { title, text, meta, price, img, tag };
  }

  function eventItem(title, date, time, text) {
    return { title, date, time, text };
  }

  function quote(text, author) {
    return { text, author };
  }

  function plan(title, price, text, features, popular = false) {
    return { title, price, text, features, popular };
  }

  function mini(title, text) {
    return { title, text };
  }

  function faq(question, answer) {
    return { question, answer };
  }

  function init() {
    const pageKey = document.body.dataset.page || "home";
    const page = pages[pageKey] || pages.home;
    document.getElementById("site-header").innerHTML = renderHeader(pageKey);
    document.getElementById("site-footer").innerHTML = renderFooter();
    document.getElementById("app").innerHTML = renderHero(page.hero) + page.sections.map((section, index) => renderSection(section, index)).join("");
    setupInteractions();
    renderIcons();
  }

  function renderHeader(activeKey) {
    const desktopLinks = navItems.map(([label, href, key]) => `<a class="nav-link ${key === activeKey ? "active" : ""}" href="${href}">${label}</a>`).join("");
    const mobileLinks = navItems.map(([label, href, key]) => `<a class="nav-link ${key === activeKey ? "active" : ""} text-base" href="${href}" data-close-menu>${label}</a>`).join("");

    return `
      <header class="site-header">
        <div class="site-header-inner">
          <a href="index.html" class="flex shrink-0 items-center gap-3" aria-label="Paperie and Petal home">
            <span class="brand-mark"><i data-lucide="scissors"></i></span>
            <span class="leading-tight">
              <span class="block font-display text-xl font-bold">Paperie & Petal</span>
              <span class="brand-subtitle">Scrapbook Studio</span>
            </span>
          </a>
          <nav class="desktop-nav mx-auto hidden items-center gap-3 xl:flex" aria-label="Primary navigation">${desktopLinks}</nav>
          <div class="desktop-actions hidden shrink-0 items-center gap-2 xl:flex">
            <a class="btn-primary px-4 text-xs" href="collections.html"><i data-lucide="shopping-bag"></i>Shop Collections</a>
            <a class="btn-secondary px-4 text-xs" href="workshops.html"><i data-lucide="calendar-days"></i>Book a Workshop</a>
            <button class="icon-btn" type="button" aria-label="Toggle dark mode" data-theme-toggle></button>
            <button class="icon-btn" type="button" aria-label="Toggle right to left layout" data-rtl-toggle></button>
          </div>
          <button class="icon-btn mobile-menu-button ms-auto" type="button" aria-label="Open menu" data-open-menu><i data-lucide="menu"></i></button>
        </div>
      </header>
      <div class="mobile-scrim" data-close-menu></div>
      <aside class="mobile-panel" aria-label="Mobile navigation" aria-hidden="true">
        <div class="flex items-center justify-between gap-3">
          <span class="font-display text-2xl font-bold">Paperie & Petal</span>
          <button class="icon-btn" type="button" aria-label="Close menu" data-close-menu><i data-lucide="x"></i></button>
        </div>
        <nav class="mt-8 grid gap-3" aria-label="Mobile primary navigation">${mobileLinks}</nav>
        <div class="mt-8 grid gap-3">
          <a class="btn-primary px-5 text-sm" href="collections.html" data-close-menu><i data-lucide="shopping-bag"></i>Shop Collections</a>
          <a class="btn-secondary px-5 text-sm" href="workshops.html" data-close-menu><i data-lucide="calendar-days"></i>Book a Workshop</a>
          <div class="grid grid-cols-2 gap-3">
            <button class="btn-ghost px-4 text-sm" type="button" data-theme-toggle></button>
            <button class="btn-ghost px-4 text-sm" type="button" data-rtl-toggle></button>
          </div>
        </div>
      </aside>
    `;
  }

  function renderFooter() {
    return `
      <footer class="section border-t border-[color:var(--line)] pb-10">
        <div class="site-shell">
          <div class="grid gap-8 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.7fr]">
            <div class="flex flex-col items-center text-center">
              <div class="flex items-center justify-center gap-3">
                <span class="brand-mark"><i data-lucide="layers-3"></i></span>
                <span class="font-display text-3xl font-bold">Paperie &amp; Petal</span>
              </div>
              <p class="section-copy mt-5 max-w-md">A boutique scrapbook supply and paper crafting studio for elegant collections, refined tools, workshops, and handmade inspiration.</p>
              <div class="mt-6 flex justify-center gap-2">
                <a class="icon-btn" href="inspiration-gallery.html" aria-label="Inspiration"><i data-lucide="image"></i></a>
                <a class="icon-btn" href="workshops.html" aria-label="Workshops"><i data-lucide="calendar-heart"></i></a>
                <a class="icon-btn" href="contact.html" aria-label="Contact"><i data-lucide="send"></i></a>
              </div>
            </div>
            ${footerColumn("Shop", [["Collections", "collections.html"], ["Craft Tools", "craft-tools.html"], ["Pricing", "pricing.html"]])}
            ${footerColumn("Create", [["Inspiration", "inspiration-gallery.html"], ["Workshops", "workshops.html"], ["Home 2", "home2.html"]])}
            ${footerColumn("Studio", [["About", "about.html"], ["Contact", "contact.html"], ["Home", "index.html"]])}
          </div>
          <div class="mt-10 flex flex-col gap-3 border-t border-[color:var(--line)] pt-6 text-sm text-[color:var(--muted)] items-center text-center">
            <p>Copyright 2026 Paperie &amp; Petal. Handmade-inspired boutique website.</p>
            <p>Made for paper lovers, crop nights, and creative rituals.</p>
          </div>
        </div>
      </footer>
    `;
  }

  function footerColumn(title, links) {
    return `
      <div class="flex flex-col items-center text-center">
        <h3 class="font-display text-2xl font-bold">${title}</h3>
        <div class="mt-4 grid gap-3">
          ${links.map(([label, href]) => `<a class="nav-link w-fit mx-auto" href="${href}">${label}</a>`).join("")}
        </div>
      </div>
    `;
  }

  function renderHero(hero) {
    return `
      <section class="hero-section">
        <div class="hero-bg" style="background-image:url('${hero.image}')"></div>
        <div class="site-shell py-24">
          <div class="reveal max-w-4xl mx-auto flex flex-col items-center text-center">
            <span class="eyebrow">${hero.eyebrow}</span>
            <h1 class="hero-title mt-6">${highlightLastWord(hero.title)}</h1>
            <p class="hero-copy mt-7">${hero.copy}</p>
            <div class="hero-actions mt-9 flex flex-wrap justify-center gap-4">
              <a class="btn-primary px-8 py-5 text-base" href="${hero.ctas[0][1]}"><i data-lucide="sparkles"></i>${hero.ctas[0][0]}</a>
              <a class="btn-secondary px-8 py-5 text-base" href="${hero.ctas[1][1]}"><i data-lucide="calendar-check"></i>${hero.ctas[1][0]}</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function highlightLastWord(title) {
    const words = title.split(" ");
    const last = words.pop();
    return `${words.join(" ")} <span class="gradient-text">${last}</span>`;
  }

  function renderSection(section, index) {
    const renderers = {
      cards: renderCardsSection,
      slider: renderSliderSection,
      masonry: renderMasonrySection,
      events: renderEventsSection,
      testimonials: renderTestimonialsSection,
      pricing: renderPricingSection,
      comparison: renderComparisonSection,
      faq: renderFaqSection,
      calendar: renderCalendarSection,
      contact: renderContactSection,
      feature: renderFeatureSection
    };
    return (renderers[section.kind] || renderFeatureSection)(section, index);
  }

  function renderHeading(section) {
    return `
      <div class="reveal flex flex-col items-center text-center">
        <span class="eyebrow">${section.eyebrow}</span>
        <h2 class="section-title mt-5">${section.title}</h2>
        <p class="section-copy mt-5 max-w-3xl">${section.copy}</p>
      </div>
    `;
  }

  function renderFeatureSection(section, index) {
    const content = `
      <div class="w-full">
        ${renderHeading(section)}
        <div class="mt-8 grid gap-4">
          ${(section.items || []).map((entry) => `
            <article class="paper-card reveal pt-10 p-5 text-center">
              <div class="washi-strip"></div>
              <h3 class="font-display text-2xl font-bold">${entry.title}</h3>
              <p class="section-copy mt-2">${entry.text}</p>
            </article>
          `).join("")}
        </div>
      </div>
    `;
    return splitSection(section, index, content);
  }

  function renderCardsSection(section, index) {
    const content = `
      <div class="w-full">
        ${renderHeading(section)}
        <div class="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          ${section.items.map(renderProductCard).join("")}
        </div>
      </div>
    `;
    return splitSection(section, index, content);
  }

  function renderSliderSection(section, index) {
    const sliderId = `slider-${index}`;
    const content = `
      <div class="w-full">
        ${renderHeading(section)}
        <div class="mt-6 flex justify-center gap-2">
          <button class="icon-btn" type="button" aria-label="Previous products" data-slider-prev="${sliderId}"><i data-lucide="arrow-left"></i></button>
          <button class="icon-btn" type="button" aria-label="Next products" data-slider-next="${sliderId}"><i data-lucide="arrow-right"></i></button>
        </div>
        <div class="slider-row mt-5" data-slider="${sliderId}">
          ${section.items.map(renderProductCard).join("")}
        </div>
      </div>
    `;
    return splitSection(section, index, content);
  }

  function renderProductCard(card) {
    return `
      <article class="product-card reveal overflow-hidden p-3 h-full flex flex-col">
        <div class="image-frame aspect-[4/3] shrink-0">
          <img src="${card.img}" alt="${card.title}" loading="lazy" data-lightbox />
          <div class="gallery-overlay"><span class="text-sm font-bold">${card.tag}</span></div>
        </div>
        <div class="p-3 text-center flex flex-col grow">
          <div class="product-meta mb-3 flex flex-wrap justify-center gap-2">
            <span class="tag-pill">${card.meta}</span>
            <span class="tag-pill">${card.price}</span>
          </div>
          <h3 class="product-title font-display text-2xl font-bold leading-tight">${card.title}</h3>
          <p class="section-copy mt-2 text-sm grow">${card.text}</p>
        </div>
      </article>
    `;
  }

  function splitSection(section, index, content) {
    const media = `<div class="reveal mt-16 flex justify-center w-full">${renderImageStack(section.images || imageSets.paper)}</div>`;
    return `
      <section class="section" ${section.id ? `id="${section.id}"` : ""}>
        <div class="site-shell flex flex-col items-center">
          <div class="w-full flex flex-col items-center">
            ${content}
          </div>
          ${media}
        </div>
      </section>
    `;
  }

  function renderImageStack(images) {
    const safeImages = images.length >= 3 ? images : [...images, ...imageSets.paper].slice(0, 3);
    return `
      <div class="image-stack">
        ${safeImages.slice(0, 3).map((src, index) => `
          <figure class="image-frame">
            <img src="${src}" alt="Paper craft visual ${index + 1}" loading="lazy" data-lightbox />
          </figure>
        `).join("")}
      </div>
    `;
  }

  function renderMasonrySection(section) {
    return `
      <section class="section" ${section.id ? `id="${section.id}"` : ""}>
        <div class="site-shell">
          <div class="flex flex-col items-center">
            ${renderHeading(section)}
          </div>
          <div class="masonry mt-10">
            ${section.images.map((src, index) => `
              <figure class="masonry-item image-frame reveal" style="height:${index % 3 === 0 ? "360" : index % 3 === 1 ? "460" : "300"}px">
                <img src="${src}" alt="${section.title} ${index + 1}" loading="lazy" data-lightbox />
                <figcaption class="gallery-overlay">
                  <strong>${index % 2 === 0 ? "Layer idea" : "Studio detail"}</strong>
                  <span class="mt-1 block text-sm opacity-90">${index % 2 === 0 ? "Save for your next handmade page." : "Tap to preview the full visual."}</span>
                </figcaption>
              </figure>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderEventsSection(section, index) {
    const content = `
      <div>
        ${renderHeading(section)}
        <div class="mt-8 grid gap-4">
          ${section.items.map((event) => `
            <article class="event-card reveal p-5">
              <div class="flex flex-col items-center text-center gap-6">
                <div>
                  <span class="tag-pill">${event.date} - ${event.time}</span>
                  <h3 class="mt-4 font-display text-2xl font-bold">${event.title}</h3>
                  <p class="section-copy mt-2">${event.text}</p>
                </div>
                <a class="btn-secondary shrink-0 px-8 text-sm" href="contact.html"><i data-lucide="ticket"></i>Register</a>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    `;
    return splitSection(section, index, content);
  }

  function renderTestimonialsSection(section, index) {
    const content = `
      <div>
        ${renderHeading(section)}
        <div class="mt-8 grid gap-4">
          ${section.items.map((entry) => `
            <blockquote class="testimonial-card reveal p-6 text-center">
              <i class="text-[color:var(--brand-rose)] mx-auto block w-fit" data-lucide="quote"></i>
              <p class="mt-4 font-display text-2xl leading-snug">${entry.text}</p>
              <footer class="mt-4 text-sm font-bold text-[color:var(--muted)]">${entry.author}</footer>
            </blockquote>
          `).join("")}
        </div>
      </div>
    `;
    return splitSection(section, index, content);
  }

  function renderPricingSection(section, index) {
    const content = `
      <div>
        ${renderHeading(section)}
        <div class="mt-8 grid gap-5 md:grid-cols-3">
          ${section.plans.map((planItem) => `
            <article class="price-card reveal p-6 text-center h-full flex flex-col ${planItem.popular ? "border-[color:var(--brand-rose)]" : ""}">
              <div class="pricing-badge mb-4">
                ${planItem.popular ? `<span class="tag-pill mx-auto">Most Popular</span>` : ""}
              </div>
              <h3 class="pricing-title font-display text-3xl font-bold leading-tight">${planItem.title}</h3>
              <p class="pricing-price mt-3 text-4xl font-black text-[color:var(--brand-rose)]">${planItem.price}</p>
              <p class="pricing-text section-copy mt-3 text-sm">${planItem.text}</p>
              <ul class="mt-8 grid gap-3 text-sm text-[color:var(--muted)] text-center grow mx-auto w-fit">
                ${planItem.features.map((feature) => `<li class="flex items-center justify-center gap-2"><i class="size-4 shrink-0 text-[color:var(--brand-sage)]" data-lucide="check"></i><span>${feature}</span></li>`).join("")}
              </ul>
              <div class="mt-8">
                <a class="btn-primary w-full px-5 text-sm" href="contact.html">Choose Plan</a>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    `;
    return splitSection(section, index, content);
  }

  function renderComparisonSection(section, index) {
    const content = `
      <div>
        ${renderHeading(section)}
        <div class="comparison-table reveal mt-8">
          <table>
            <thead>
              <tr>${(section.headers || section.rows[0].map((_, col) => col === 0 ? "Detail" : `Option ${col}`)).map((heading) => `<th>${heading}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${section.rows.map((row) => `<tr>${row.map((cell, cellIndex) => `<td class="${cellIndex === 0 ? "font-bold text-[color:var(--ink)]" : "text-[color:var(--muted)]"}">${cell}</td>`).join("")}</tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
    return splitSection(section, index, content);
  }

  function renderFaqSection(section, index) {
    const content = `
      <div class="w-full">
        ${renderHeading(section)}
        <div class="mt-8 grid gap-4">
          ${section.faqs.map((entry, itemIndex) => `
            <article class="faq-item paper-card reveal p-5 ${itemIndex === 0 ? "is-open" : ""}">
              <button class="flex w-full items-center justify-center gap-4 text-center" type="button" data-faq-toggle>
                <span class="font-display text-xl font-bold">${entry.question}</span>
                <i data-lucide="chevron-down"></i>
              </button>
              <div class="faq-panel">
                <div>
                  <p class="section-copy pt-4 text-center">${entry.answer}</p>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    `;
    return splitSection(section, index, content);
  }

  function renderCalendarSection(section, index) {
    const featured = {
      4: "Crop",
      11: "Washi",
      16: "Florals",
      22: "Journal",
      28: "Album"
    };
    const blanks = Array.from({ length: 5 }, () => `<div class="calendar-cell opacity-40" aria-hidden="true"></div>`).join("");
    const cells = Array.from({ length: 31 }, (_, offset) => offset + 1).map((day) => `
      <div class="calendar-cell ${featured[day] ? "featured" : ""}">
        <strong>${day}</strong>
        ${featured[day] ? `<span class="mt-2 block font-bold">${featured[day]}</span>` : ""}
      </div>
    `).join("");
    const content = `
      <div>
        ${renderHeading(section)}
        <div class="paper-card reveal mt-8 p-4">
          <div class="mb-4 flex items-center justify-between gap-3">
            <h3 class="font-display text-2xl font-bold">May 2026</h3>
            <span class="tag-pill">Featured dates</span>
          </div>
          <div class="calendar-grid text-center text-xs font-bold text-[color:var(--muted)]">
            ${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => `<div>${day}</div>`).join("")}
          </div>
          <div class="calendar-grid mt-2">${blanks}${cells}</div>
        </div>
      </div>
    `;
    return splitSection(section, index, content);
  }

  function renderContactSection(section, index) {
    const content = `
      <div>
        ${renderHeading(section)}
        <form class="paper-card reveal mt-8 grid gap-4 p-5" data-contact-form>
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-bold text-center">Name<input class="contact-input" name="name" placeholder="Your name" required /></label>
            <label class="grid gap-2 text-sm font-bold text-center">Email<input class="contact-input" type="email" name="email" placeholder="you@example.com" required /></label>
          </div>
          <label class="grid gap-2 text-sm font-bold text-center">Topic<select class="contact-input" name="topic"><option>Workshop registration</option><option>Custom kit request</option><option>Product question</option><option>Private event</option></select></label>
          <label class="grid gap-2 text-sm font-bold text-center">Message<textarea class="contact-input min-h-36" name="message" placeholder="Tell us about the project, workshop, or supplies you are interested in." required></textarea></label>
          <button class="btn-primary w-fit px-6 py-4 text-sm mx-auto" type="submit"><i data-lucide="send"></i>Send Message</button>
          <p class="hidden text-sm font-bold text-[color:var(--brand-sage)] text-center" data-form-status>Thanks. Your message is ready for the studio team.</p>
        </form>
      </div>
    `;
    return splitSection(section, index, content);
  }

  function setupInteractions() {
    updateToggleButtons();
    setupThemeToggle();
    setupRtlToggle();
    setupMobileMenu();
    setupSliders();
    setupLightbox();
    setupFaqs();
    setupReveal();
    setupForms();
  }

  function setupThemeToggle() {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("paperie-theme", isDark ? "dark" : "light");
        updateToggleButtons();
        renderIcons();
      });
    });
  }

  function setupRtlToggle() {
    document.querySelectorAll("[data-rtl-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const isRtl = document.documentElement.getAttribute("dir") === "rtl";
        document.documentElement.setAttribute("dir", isRtl ? "ltr" : "rtl");
        localStorage.setItem("paperie-rtl", String(!isRtl));
        updateToggleButtons();
        renderIcons();
      });
    });
  }

  function updateToggleButtons() {
    const isDark = document.documentElement.classList.contains("dark");
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const compact = button.classList.contains("icon-btn");
      button.innerHTML = compact
        ? `<i data-lucide="${isDark ? "sun" : "moon"}"></i>`
        : `<i data-lucide="${isDark ? "sun" : "moon"}"></i>${isDark ? "Light Mode" : "Dark Mode"}`;
    });

    const isRtl = document.documentElement.getAttribute("dir") === "rtl";
    document.querySelectorAll("[data-rtl-toggle]").forEach((button) => {
      const compact = button.classList.contains("icon-btn");
      button.innerHTML = compact
        ? `<i data-lucide="languages"></i>`
        : `<i data-lucide="languages"></i>${isRtl ? "LTR Layout" : "RTL Layout"}`;
    });
  }

  function setupMobileMenu() {
    const panel = document.querySelector(".mobile-panel");
    const scrim = document.querySelector(".mobile-scrim");
    const setOpen = (open) => {
      panel.classList.toggle("is-open", open);
      scrim.classList.toggle("is-open", open);
      panel.setAttribute("aria-hidden", String(!open));
      document.body.style.overflow = open ? "hidden" : "";
    };
    document.querySelectorAll("[data-open-menu]").forEach((button) => button.addEventListener("click", () => setOpen(true)));
    document.querySelectorAll("[data-close-menu]").forEach((element) => element.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  }

  function setupSliders() {
    document.querySelectorAll("[data-slider-prev], [data-slider-next]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.sliderPrev || button.dataset.sliderNext;
        const slider = document.querySelector(`[data-slider="${id}"]`);
        const direction = button.dataset.sliderNext ? 1 : -1;
        const rtlMultiplier = document.documentElement.getAttribute("dir") === "rtl" ? -1 : 1;
        slider.scrollBy({ left: direction * rtlMultiplier * 360, behavior: "smooth" });
      });
    });
  }

  function setupLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox.querySelector("img");
    document.addEventListener("click", (event) => {
      const target = event.target.closest("[data-lightbox]");
      if (!target) return;
      lightboxImage.src = target.currentSrc || target.src;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    });
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target.closest(".lightbox-close")) closeLightbox();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeLightbox();
    });

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.src = "";
    }
  }

  function setupFaqs() {
    document.querySelectorAll("[data-faq-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        button.closest(".faq-item").classList.toggle("is-open");
      });
    });
  }

  function setupReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13 });
    elements.forEach((element) => observer.observe(element));
  }

  function setupForms() {
    document.querySelectorAll("[data-contact-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.querySelector("[data-form-status]").classList.remove("hidden");
        form.reset();
      });
    });
  }

  function renderIcons() {
    if (window.lucide) {
      window.lucide.createIcons({
        attrs: {
          "stroke-width": 1.75
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
