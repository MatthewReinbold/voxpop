// Define the arrays for each column
// Define the arrays for each column with words and definitions
const bingoItems = {
    "Persona": [
        {
            "Characteristic": "Current NFL athlete, coach, or general manager",
            "Explanation": "Ads featuring well-known coaches or team staff.",
            "Examples": "Patrick Mahomes promoting State Farm"
        },
        {
            "Characteristic": "Former NFL athlete or coach",
            "Explanation": "Retired players or coaches leveraging their legacy and popularity.",
            "Examples": "Peyton Manning for Nationwide; Joe Montana for Skechers."
        },
        {
            "Characteristic": "Athlete from a different sport",
            "Explanation": "Athletes from non-football sports used for broader appeal.",
            "Examples": "Serena Williams for Gatorade; Shaquille O'Neal for Icy Hot."
        },
        {
            "Characteristic": "Named spokesperson played by an actor",
            "Explanation": "A named character associated with a company",
            "Examples": "Flo from Progressive; Mayhem from Allstate."
        },
        {
            "Characteristic": "Non-athlete celebrity",
            "Explanation": "Celebrities with no sports ties who bring star power to the ad.",
            "Examples": "Kevin Hart for DraftKings; Matthew McConaughey for Lincoln."
        },
        {
            "Characteristic": "Animated spokesperson or mascot",
            "Explanation": "Fictional or animated characters representing the brand.",
            "Examples": "The Aflac Duck; Carfax's Fox."
        },
        {
            "Characteristic": "\"Customer\" testimonials",
            "Explanation": "Everyday individuals sharing their positive experiences with a product.",
            "Examples": "\"I switched to Geico and saved $500\"; testimonials in local car dealership ads."
        },
        {
            "Characteristic": "Broadcaster or analyst",
            "Explanation": "Popular sports commentators, analysts, or reporters endorsing products",
            "Examples": "Joe Buck for Halls"
        },
        {
            "Characteristic": "Musician",
            "Explanation": "Music artists tied to the NFL, like those performing at halftime shows or producing game soundtracks.",
            "Examples": "Shakira for Pepsi; Eminem for Chrysler (\"Lose Yourself\" ad)."
        },
        {
            "Characteristic": "Family member of athletes",
            "Explanation": "Spouses, parents, or kids of famous players appearing in feel-good ads.",
            "Examples": "Donna Kelce, the mother of Travis and Jason Kelce, in Campbell's Chunky ads."
        },
        {
            "Characteristic": "Local business owner in regional ad",
            "Explanation": "Highlighting small or regional businesses, often tied to community pride.",
            "Examples": "Local car dealerships, accident law firms, or mattress warehouses during game day ads."
        },
        {
            "Characteristic": "Military veteran",
            "Explanation": "Veterans tied to patriotic themes or used as symbols of perseverance and service.",
            "Examples": "Those that appear opposite of Gronk during USAA ads."
        },
        {
            "Characteristic": "Fan archetype",
            "Explanation": "Exaggerated versions of fan personas, like the diehard superfan, casual viewer, or tailgater.",
            "Examples": "The residents of Dr. Pepper's \"Fansville\" commercials."
        }
    ],
    "Product": [
        {
            "Characteristic": "Delivery service",
            "Explanation": "Services delivering food, groceries, or goods.",
            "Examples": "Instacart, Uber Eats, Chewy"
        },
        {
            "Characteristic": "Sit-in dining",
            "Explanation": "Restaurants focusing on table service.",
            "Examples": "Red Lobster, Applebees, Olive Garden"
        },
        {
            "Characteristic": "Fast food",
            "Explanation": "Food that comes with a drive-through.",
            "Examples": "Burger King, Wing Stop"
        },
        {
            "Characteristic": "Snack food",
            "Explanation": "Food that can be bought at a grocery store.",
            "Examples": "Doritos, candy, nuts"
        },
        {
            "Characteristic": "Coffee",
            "Explanation": "Chains or brands specializing in coffee.",
            "Examples": "Starbucks"
        },
        {
            "Characteristic": "Soda, pop, or 'Coke'",
            "Explanation": "Soft drinks and carbonated beverages.",
            "Examples": "Coca-Cola, Pepsi, Mountain Dew, Dr. Pepper"
        },
        {
            "Characteristic": "Beer or alcohol",
            "Explanation": "Alcoholic beverages, from beer to spirits.",
            "Examples": "Smirnoff, Coors, Bud Light, wine"
        },
        {
            "Characteristic": "Sports drink",
            "Explanation": "Drinks marketed for hydration and energy.",
            "Examples": "Gatorade, C4"
        },
        {
            "Characteristic": "Credit card",
            "Explanation": "Credit products for everyday or specialized use.",
            "Examples": "Capital One, Discover Card"
        },
        {
            "Characteristic": "Bank or credit union",
            "Explanation": "Financial institutions offering checking or savings.",
            "Examples": "Wells Fargo, Chase, Navy Federal Credit Union"
        },
        {
            "Characteristic": "Crypto",
            "Explanation": "Platforms for trading or managing cryptocurrency.",
            "Examples": "Coinbase, Crypto.com, Binance"
        },
        {
            "Characteristic": "Retirement or investment planning",
            "Explanation": "Services for managing wealth or retirement.",
            "Examples": "Schwab, Fidelity, Vanguard"
        },
        {
            "Characteristic": "Other upcoming sporting events",
            "Explanation": "Ads promoting other sports programming.",
            "Examples": "Monday Night Football, College Bowl Games, NBA, Premier League, UFL"
        },
        {
            "Characteristic": "The NFL Shop",
            "Explanation": "Merchandise related to the NFL.",
            "Examples": "Jerseys, hats, memorabilia"
        },
        {
            "Characteristic": "Another show on same network",
            "Explanation": "Ads for non-sports programming on the same channel.",
            "Examples": "New sitcoms, dramas, or reality TV shows"
        },
        {
            "Characteristic": "New movie trailers",
            "Explanation": "Promotions for upcoming theatrical releases.",
            "Examples": "Marvel movies, DC films, major blockbusters"
        },
        {
            "Characteristic": "Regional lotto",
            "Explanation": "Lotteries or gambling services tied to the region.",
            "Examples": "Powerball, Mega Millions, state-specific lottos"
        },
        {
            "Characteristic": "Sportsbook",
            "Explanation": "Platforms for betting on sports games.",
            "Examples": "FanDuel, DraftKings, BetMGM"
        },
        {
            "Characteristic": "Cellular service",
            "Explanation": "Mobile service providers offering plans and devices.",
            "Examples": "Verizon, AT&T, T-Mobile"
        },
        {
            "Characteristic": "Connected tech gadget",
            "Explanation": "Smart devices for home or personal use.",
            "Examples": "Amazon Echo, Google Nest, Apple Watch"
        },
        {
            "Characteristic": "Streaming service or show",
            "Explanation": "Online platforms or specific streaming content.",
            "Examples": "Netflix, Disney+, Amazon Prime Video"
        },
        {
            "Characteristic": "Athletic brand or sportswear",
            "Explanation": "Apparel and equipment for sports and fitness.",
            "Examples": "Nike, Adidas, Under Armour"
        },
        {
            "Characteristic": "Travel accommodations",
            "Explanation": "Services for booking hotels or flights.",
            "Examples": "Expedia, Hilton, Delta Airlines"
        },
        {
            "Characteristic": "Cruises",
            "Explanation": "Vacation packages on cruise ships.",
            "Examples": "Carnival, Royal Caribbean, Norwegian Cruise Line"
        },
        {
            "Characteristic": "Electric vehicle",
            "Explanation": "Ads promoting EVs and their features.",
            "Examples": "Tesla, Ford Mustang Mach-E, Chevrolet Bolt"
        },
        {
            "Characteristic": "Fragrance",
            "Explanation": "Perfumes or colognes marketed for sports audiences.",
            "Examples": "Axe, Old Spice, Ralph Lauren"
        }
    ],
    "Tone": [
        {
            "Characteristic": "\"______ Sales Event\"",
            "Explanation": "Promotion tied to a specific product or seasonal event.",
            "Examples": "\"Ford Truck Sales Event,\" \"Holiday Savings Event.\""
        },
        {
            "Characteristic": "\"-for a limited time only\" or \"limited-time offer\"",
            "Explanation": "Urgency-based phrases to encourage quick decisions.",
            "Examples": "Save 20% this week only!"
        },
        {
            "Characteristic": "\"Official ____ of the NFL\"",
            "Explanation": "Partnerships with NFL or teams for credibility and relevance.",
            "Examples": "\"Official Beer of the NFL – Bud Light,\" \"Proud Partner of the NFL – Visa.\""
        },
        {
            "Characteristic": "\"Don't miss out\"",
            "Explanation": "Urgency-driven phrase creating FOMO (Fear of Missing Out).",
            "Examples": "\"Don't miss out on these game-day savings!\""
        },
        {
            "Characteristic": "\"Brought to you by-\"",
            "Explanation": "Intro or outro phrase linking a product to the ad content.",
            "Examples": "\"This segment is brought to you by DraftKings.\""
        },
        {
            "Characteristic": "Rapid fire medical disclaimer",
            "Explanation": "Required pharmaceutical disclaimer quickly addressing side effects or risks.",
            "Examples": "\"May cause dizziness, headaches, or nausea; consult a doctor before use.\""
        },
        {
            "Characteristic": "Ratings and reviews",
            "Explanation": "Highlighting \"5-star\" ratings or awards received.",
            "Examples": "\"JD Power Award Winner for Best Truck 5 Years Running,\" \"Top-Rated SUV of 2023.\""
        },
        {
            "Characteristic": "\"Act now!\"",
            "Explanation": "A call to immediate action.",
            "Examples": "\"Act now and save!\""
        },
        {
            "Characteristic": "\"Hurry, offer ends soon!\"",
            "Explanation": "A time-sensitive prompt to increase urgency.",
            "Examples": "\"Hurry, sale ends Sunday!\""
        },
        {
            "Characteristic": "\"Visit us online to learn more\"",
            "Explanation": "Encourages viewers to explore products or services further.",
            "Examples": "\"Visit geico.com for your free quote.\""
        },
        {
            "Characteristic": "Needledrop",
            "Explanation": "Music that first appeared in the Top 40 now used in a commercial.",
            "Examples": "Queen's \"We Will Rock You\" in sports ads, AC/DC's \"Thunderstruck\" in car commercials."
        },
        {
            "Characteristic": "Jingle",
            "Explanation": "Music that only appears in a commercial context.",
            "Examples": "McDonald's \"I'm Lovin' It,\" Nationwide's \"Nationwide is on your side.\""
        },
        {
            "Characteristic": "Silence or minimalism",
            "Explanation": "Strategic pauses or no sound at all to grab attention amidst noisier ads.",
            "Examples": "Apple's minimalist iPhone ads, dramatic pauses in Nike commercials."
        },
        {
            "Characteristic": "Epic orchestral music",
            "Explanation": "Grand, sweeping scores to evoke drama and intensity.",
            "Examples": "Ads for luxury cars, the Olympics, or playoff game promotions."
        },
        {
            "Characteristic": "Crowd noise",
            "Explanation": "Cheering fans, stadium roars, or chants to replicate the excitement of live sports.",
            "Examples": "Stadium crowd cheering for beer ads like Budweiser or Pepsi."
        },
        {
            "Characteristic": "ASMR-like sounds",
            "Explanation": "Close-up audio of pouring beverages, crunching snacks, or other product usage sounds.",
            "Examples": "Close-ups of soda being poured or chips being crunched in ads for Coca-Cola or Lay's."
        },
        {
            "Characteristic": "Sports commentary",
            "Explanation": "Play-by-play narrations or mock commentary tied to the product.",
            "Examples": "Ads for DraftKings or Gatorade featuring game-style commentary."
        },
        {
            "Characteristic": "Electronic and EDM Beats",
            "Explanation": "High-energy music tracks to match fast-paced visuals or appeal to younger audiences.",
            "Examples": "Beats used in ads for Nike, Adidas, or gaming products."
        },
        {
            "Characteristic": "Nature sounds",
            "Explanation": "Wind rustling, waves crashing, or birds chirping for ads tied to outdoor sports or rugged products.",
            "Examples": "Jeep or Patagonia commercials showcasing adventures in nature."
        },
        {
            "Characteristic": "Inspirational speeches",
            "Explanation": "Excerpts from famous motivational speeches or original voiceovers to inspire action.",
            "Examples": "Ads featuring MLK's \"I Have a Dream\" speech or clips from famous sports coaches."
        },
        {
            "Characteristic": "Team huddles and/or chanting",
            "Explanation": "Pre-game pep talks or team rally cries.",
            "Examples": "Ads for Gatorade, showing athletes rallying together before a game."
        },
        {
            "Characteristic": "Engine sounds",
            "Explanation": "Roaring engines or tire screeches for automotive ads.",
            "Examples": "Dodge Ram trucks navigating tough terrain or Formula 1-themed car ads."
        }
    ],
    "Setting": [
        {
            "Characteristic": "Family dinner",
            "Explanation": "A family gathered around a table, often depicting togetherness and wholesome values.",
            "Examples": "Ads for food products like Campbell's Soup or Olive Garden."
        },
        {
            "Characteristic": "Tailgate or backyard BBQ",
            "Explanation": "Outdoor gatherings focused on grilling, eating, and socializing, often tied to game day.",
            "Examples": "Ads for Bud Light, Weber Grills, or Doritos."
        },
        {
            "Characteristic": "Mountainside or forest",
            "Explanation": "Rugged, natural settings used to evoke adventure or durability.",
            "Examples": "Jeep or Patagonia ads featuring scenic mountain trails or dense forests."
        },
        {
            "Characteristic": "A construction site",
            "Explanation": "Showcasing heavy equipment or rugged vehicles in action.",
            "Examples": "Ford or Caterpillar ads demonstrating durability and strength."
        },
        {
            "Characteristic": "Gym or fitness center",
            "Explanation": "Depicting hard work, dedication, or self-improvement in a fitness environment.",
            "Examples": "Nike or Peloton ads showcasing people working out."
        },
        {
            "Characteristic": "Salt flats",
            "Explanation": "Flat, dusty, wide-open expanse often used in automobile commercials to portray a vehicle's speed and power.",
            "Examples": "Car commercials like Dodge or BMW highlighting performance."
        },
        {
            "Characteristic": "Pacific coast highway",
            "Explanation": "A winding highway north of Los Angeles that dramatically snakes between the Pacific Ocean and the rocky California coast, often meant to demonstrate a vehicle's agility.",
            "Examples": "Car commercials for brands like Mercedes-Benz or Audi."
        },
        {
            "Characteristic": "Desert or dunes",
            "Explanation": "Expansive, sandy environments evoking ruggedness and resilience.",
            "Examples": "Toyota trucks climbing desert hills; ads for off-road vehicles or endurance gear."
        },
        {
            "Characteristic": "Sports bar",
            "Explanation": "A casual venue with fans cheering, eating, and drinking while watching a game.",
            "Examples": "Ads for beer brands like Budweiser, or food chains like Buffalo Wild Wings."
        },
        {
            "Characteristic": "Indoor party or get-together",
            "Explanation": "Social gatherings indoors, often focused on shared experiences and fun.",
            "Examples": "Coca-Cola or snack ads featuring holiday or game-day celebrations."
        },
        {
            "Characteristic": "Locker room, sideline, or stadium",
            "Explanation": "Depictions of athletes prepping for or celebrating a game, or fans enjoying live sports.",
            "Examples": "Gatorade or NFL-related commercials."
        },
        {
            "Characteristic": "Driveway",
            "Explanation": "Often featuring family activities like kids playing basketball or adults washing cars.",
            "Examples": "Progressive Insurance's \"The Backup\" campaign where backups do yard chores."
        },
        {
            "Characteristic": "Suburban kitchen",
            "Explanation": "A family-friendly, everyday setting focused on home-cooked meals or daily routines.",
            "Examples": "Ads for breakfast products like Cheerios or coffee brands like Folgers."
        },
        {
            "Characteristic": "Living room couch",
            "Explanation": "Fans watching games from home, often featuring their reactions or traditions.",
            "Examples": "Ads for streaming services like Hulu or snacks like Lay's chips."
        },
        {
            "Characteristic": "Office cubicle or break room",
            "Explanation": "Workplace settings, often used for humorous or relatable scenarios.",
            "Examples": "Ads for office products, fast food (e.g., Subway), or insurance companies like Geico."
        },
        {
            "Characteristic": "Airport or airplane",
            "Explanation": "Travel-centric settings often portraying convenience or excitement.",
            "Examples": "Ads for Delta Airlines, Expedia, or travel rewards credit cards like American Express."
        }
    ],
    "Technique": [
        {
            "Characteristic": "Patriotism",
            "Explanation": "Emphasizing national pride, symbols, or support for military or country.",
            "Examples": "Budweiser Clydesdales \"9/11 Tribute\" ad."
        },
        {
            "Characteristic": "Emotional appeal",
            "Explanation": "Tugging the heartstrings.",
            "Examples": "Ads featuring families, pets, babies, or NFL's \"Born to Play\" campaign."
        },
        {
            "Characteristic": "Humor",
            "Explanation": "Over-the-top or situational comedy to grab attention.",
            "Examples": "Geico's \"Hump Day\" ad; Old Spice's \"The Man Your Man Could Smell Like.\""
        },
        {
            "Characteristic": "Action-packed",
            "Explanation": "Dramatic, high-energy sequences.",
            "Examples": "Car chases in Dodge commercials, sports highlight reels in Nike ads."
        },
        {
            "Characteristic": "Product demonstration",
            "Explanation": "The product being used or its benefits shown visually.",
            "Examples": "Gatorade ads showing athletes performing."
        },
        {
            "Characteristic": "Flashy visual effects",
            "Explanation": "Use of animation, CGI, or elaborate sequences to wow the viewer.",
            "Examples": "Ads featuring CGI transformations like the Coca-Cola polar bears or animated sequences for car ads."
        },
        {
            "Characteristic": "FOMO (Fear of Missing Out)",
            "Explanation": "Either urgency-based appeals or scarcity messaging.",
            "Examples": "\"Limited-time offers\" in retail ads; Ticketmaster \"Seats going fast!\" promotions."
        },
        {
            "Characteristic": "Aspirational",
            "Explanation": "\"This product will change your life\" framing.",
            "Examples": "Luxury car ads featuring glamorous lifestyles; fitness equipment ads showing transformation stories."
        },
        {
            "Characteristic": "Crowd validation",
            "Explanation": "Showcasing people lining up or mass participation (e.g., \"Join millions who've switched\").",
            "Examples": "Verizon's \"Best Network\" ads; Apple's early iPhone launch crowds."
        },
        {
            "Characteristic": "Self-aware ads",
            "Explanation": "Ads acknowledging they're ads, breaking the fourth wall.",
            "Examples": "Ryan Reynolds' ads for Mint Mobile."
        },
        {
            "Characteristic": "Side-by-side comparison",
            "Explanation": "Highlighting superiority over competitors (e.g., taste tests or speed comparisons).",
            "Examples": "Pepsi's taste test challenge; Samsung vs. Apple smartphone feature comparisons."
        },
        {
            "Characteristic": "Nostalgia",
            "Explanation": "Utilizing throwback themes or set in previous time periods.",
            "Examples": "Coca-Cola's \"I'd Like to Buy the World a Coke\" throwback; retro-style Nike sneaker ads."
        },
        {
            "Characteristic": "Participation encouraged",
            "Explanation": "Promoting apps, QR codes, or contests viewers can join in real-time, or encouraging sharing on social media or using specific hashtags.",
            "Examples": "McDonald's Monopoly game; Super Bowl ads with interactive elements like Doritos' \"Crash the Super Bowl.\""
        },
        {
            "Characteristic": "Community involvement",
            "Explanation": "Promoting local sponsorships or events supported by the brand, highlighting donations, sustainability efforts, or partnerships with charities.",
            "Examples": "Walmart ads supporting local communities; Budweiser's disaster relief water donations."
        }
    ]               
};


const bingoItemsOrig = {
    B: [
        { word: "Banana", definition: "A yellow fruit" },
        { word: "Basketball", definition: "A sport with hoops" },
        { word: "Bee", definition: "A flying insect" },
        { word: "Balloon", definition: "Inflatable decoration" },
        { word: "Boat", definition: "Watercraft" }
    ],
    I: [
        { word: "Ice", definition: "Frozen water" },
        { word: "Igloo", definition: "Snow shelter" },
        { word: "Island", definition: "Land surrounded by water" },
        { word: "Ink", definition: "Liquid for writing" },
        { word: "Iceberg", definition: "Floating ice mass" }
    ],
    N: [
        { word: "Nest", definition: "A bird's home" },
        { word: "Notebook", definition: "For writing notes" },
        { word: "Night", definition: "Time of darkness" },
        { word: "Ninja", definition: "Stealthy warrior" }
    ],
    G: [
        { word: "Giraffe", definition: "Tallest animal" },
        { word: "Guitar", definition: "Stringed instrument" },
        { word: "Game", definition: "Activity for fun" },
        { word: "Galaxy", definition: "Star system" },
        { word: "Gold", definition: "Precious metal" }
    ],
    O: [
        { word: "Ocean", definition: "Large body of water" },
        { word: "Orange", definition: "Citrus fruit" },
        { word: "Owl", definition: "Nocturnal bird" },
        { word: "Oxygen", definition: "Breathable gas" },
        { word: "Octopus", definition: "Eight-armed sea creature" }
    ]
};


// Function to generate a random column without duplicates
function generateColumn(items, count) {
    const column = [...items]; // Copy the array to avoid mutating the original
    const selected = [];
    while (selected.length < count) {
        const randomIndex = Math.floor(Math.random() * column.length);
        selected.push(column.splice(randomIndex, 1)[0]);
    }
    return selected;
}


// Generate the Bingo card using the arrays
function generateBingoCard() {
    const card = [
        generateColumn(bingoItems.Persona, 5),   // Column B
        generateColumn(bingoItems.Product, 5),   // Column I
        generateColumn(bingoItems.Tone, 4),   // Column N (without the free space)
        generateColumn(bingoItems.Setting, 5),   // Column G
        generateColumn(bingoItems.Technique, 5)    // Column O
    ];
    card[2].splice(2, 0, "Free"); // Insert the "Free" space in Column N
    return card;
}

// Render the Bingo card in the table
function renderCard(card) {
    const tbody = document.querySelector("#bingo-card tbody");
    tbody.innerHTML = ""; // Clear the body of the table

    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement("td");
            
            if (card[j][i] === "Free") {
                cell.textContent = "Free";
                cell.classList.add("free");
            } else {
                const wordElement = document.createElement("div");
                wordElement.textContent = card[j][i].Characteristic;
                
                const definitionElement = document.createElement("div");
                definitionElement.textContent = card[j][i].Explanation;

                cell.appendChild(wordElement);
                cell.appendChild(definitionElement);
            }

            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
}


// Attach event listener to regenerate button
document.getElementById("regenerate").addEventListener("click", () => {
    const card = generateBingoCard();
    renderCard(card);
});

// Generate the initial card on page load
document.addEventListener("DOMContentLoaded", () => {
    const card = generateBingoCard();
    renderCard(card);
});