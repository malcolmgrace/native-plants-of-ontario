document.addEventListener("DOMContentLoaded", function () {
    const plantList = document.getElementById("plant-list");
    const searchInput = document.getElementById("search");
    
    const plants = [
        {
            name: "Eastern White Pine",
            scientificName: "Pinus strobus",
            image: "images/eastern_white_pine.jpeg",
            description: "Eastern White Pine is a large pine native to eastern North America. It is the provincial tree of Ontario.",
            category: "Trees",
            locations: ["Algonquin Park", "Georgian Bay", "Muskoka"],
            region: "Northwest"
        },
        {
            name: "Sugar Maple",
            scientificName: "Acer saccharum",
            image: "images/sugar_maple.jpg",
            description: "Sugar Maple is best known for its bright fall foliage and for being the primary source of maple syrup.",
            category: "Trees",
            locations: ["Bruce Peninsula", "Niagara Escarpment", "Ottawa Valley"],
            region: "Northeast"
        },
        {
            name: "Red Oak",
            scientificName: "Quercus rubra",
            image: "images/northern_red_oak.jpeg",
            description: "Red Oak is a large oak native to North America. It is a popular choice for landscaping and lumber.",
            category: "Trees",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "South central"
        },
        {
            name: "Eastern Hemlock",
            scientificName: "Tsuga canadensis",
            image: "images/eastern_hemlock.jpeg",
            description: "Eastern Hemlock is a large conifer native to eastern North America. It is the state tree of Pennsylvania.",
            category: "Trees",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Southwest"
        },
        {
            name: "Paper Birch",
            scientificName: "Betula papyrifera",
            image: "images/paper_birch.jpeg",
            description: "Paper Birch is a medium-sized deciduous tree native to North America. It is known for its white bark.",
            category: "Trees",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Southeast"
        },
        {
            name: "Red Osier Dogwood",
            scientificName: "Cornus sericea",
            image: "images/red_osier_dogwood.jpeg",
            description: "Red Osier Dogwood is a shrub native to North America. It is known for its red stems.",
            category: "Shrubs",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Northwest"
        },
        {
            name: "Common Ninebark",
            scientificName: "Physocarpus opulifolius",
            image: "images/common_ninebark.jpeg",
            description: "Common Ninebark is a shrub native to North America. It is known for its peeling bark.",
            category: "Shrubs",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Northeast"
        },
        {
            name: "Highbush Cranberry",
            scientificName: "Viburnum trilobum",
            image: "images/highbush_cranberry.png",
            description: "Highbush Cranberry is a shrub native to North America. It is known for its red berries.",
            category: "Shrubs",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "South central"
        },
        {
            name: "Elderberry",
            scientificName: "Sambucus canadensis",
            image: "images/elderberry.jpeg",
            description: "Elderberry is a shrub native to North America. It is known for its dark berries.",
            category: "Shrubs",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Southwest"
        },
        {
            name: "Snowberry",
            scientificName: "Symphoricarpos albus",
            image: "images/snowberry.jpg",
            description: "Snowberry is a shrub native to North America. It is known for its white berries.",
            category: "Shrubs",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Southeast"
        },
        {
            name: "Big Bluestem",
            scientificName: "Andropogon gerardii",
            image: "images/big_bluestem.jpg",
            description: "Big Bluestem is a grass native to North America. It is known for its blue-green leaves.",
            category: "Grasses",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Northwest"
        },
        {
            name: "Indian Grass",
            scientificName: "Sorghastrum nutans",
            image: "images/indian_grass.jpg",
            description: "Indian Grass is a grass native to North America. It is known for its golden seed heads.",
            category: "Grasses",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Northeast"
        },
        {
            name: "Canada Wild Rye",
            scientificName: "Elymus canadensis",
            image: "images/canadian_wild_rye.jpg",
            description: "Canada Wild Rye is a grass native to North America. It is known for its nodding seed heads.",
            category: "Grasses",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "South central"
        },
        {
            name: "Switchgrass",
            scientificName: "Panicum virgatum",
            image: "images/switchgrass.jpg",
            description: "Switchgrass is a grass native to North America. It is known for its upright form.",
            category: "Grasses",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Southwest",
        },
        {   name: "Little Bluestem",
            scientificName: "Schizachyrium scoparium",
            image: "images/little_bluestem.jpg",
            description: "Little Bluestem is a grass native to North America. It is known for its blue-green leaves.",
            category: "Grasses",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Southeast"
        },
        {
            name: "Black-Eyed Susan",
            scientificName: "Rudbeckia hirta",
            image: "images/black_eyed_susan.jpg",
            description: "Black-Eyed Susan is a perennial flower native to North America. It is known for its yellow petals.",
            category: "Perennials",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Northwest"
        },
        {
            name: "Wild Bergamot",
            scientificName: "Monarda fistulosa",
            image: "images/wild_bergamot.jpg",
            description: "Wild Bergamot is a perennial flower native to North America. It is known for its pink flowers.",
            category: "Perennials",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Northeast"
        },
        {
            name: "Canadian Goldenrod",
            scientificName: "Solidago canadensis",
            image: "images/canadian_goldenrod.jpg",
            description: "Canada Goldenrod is a perennial flower native to North America. It is known for its yellow flowers.",
            category: "Perennials",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "South central"
        },
        {
            name: "New England Aster",
            scientificName: "Symphyotrichum novae-angliae",
            image: "images/new_england_aster.jpg",
            description: "New England Aster is a perennial flower native to North America. It is known for its purple flowers.",
            category: "Perennials",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Southwest"
        },
        {
            name: "Wild Columbine",
            scientificName: "Aquilegia canadensis",
            image: "images/wild_columbine.jpg",
            description: "Wild Columbine is a perennial flower native to North America. It is known for its red and yellow flowers.",
            category: "Perennials",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Southeast"
        },
        {
            name: "Common Ragweed",
            scientificName: "Ambrosia artemisiifolia",
            image: "images/common_ragweed.jpg",
            description: "Common Ragweed is an annual plant native to North America. It is known for causing allergies.",
            category: "Annuals",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Northwest"
        },
        {
            name: "Jewelweed",
            scientificName: "Impatiens capensis",
            image: "images/jewelweed.jpg",
            description: "Jewelweed is an annual plant native to North America. It is known for its orange flowers.",
            category: "Annuals",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Northeast"
        },
        {
            name: "Field Poppy",
            scientificName: "Papaver rhoeas",
            image: "images/field_poppy.jpg",
            description: "Field Poppy is an annual plant introduced to North America. It is known for its red flowers.",
            category: "Annuals",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "South central"
        },
        {
            name: "Partridge Pea",
            scientificName: "Chamaecrista fasciculata",
            image: "images/partridge_pea.jpg",
            description: "Partridge Pea is an annual plant native to North America. It is known for its yellow flowers.",
            category: "Annuals",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Southwest"
        },
        {
            name: "Trillium (Ontario's emblem)",
            scientificName: "Trillium grandiflorum",
            image: "images/trillium.jpg",
            description: "Trillium is a wildflower native to North America. It is the emblem of Ontario.",
            category: "Wildflowers",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Southeast"
        },
        {
            name: "Jack-in-the-Pulpit",
            scientificName: "Arisaema triphyllum",
            image: "images/jack_in_the_pulpit.jpg",
            description: "Jack-in-the-Pulpit is a wildflower native to North America. It is known for its unique flowers.",
            category: "Wildflowers",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Northwest"
        },
        {
            name: "Bloodroot",
            scientificName: "Sanguinaria canadensis",
            image: "images/bloodroot.jpeg",
            description: "Bloodroot is a wildflower native to North America. It is known for its white flowers.",
            category: "Wildflowers",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Northeast"
        },
        {
            name: "Wild Ginger",
            scientificName: "Asarum canadense",
            image: "images/wild_ginger.jpg",
            description: "Wild Ginger is a wildflower native to North America. It is known for its heart-shaped leaves.",
            category: "Wildflowers",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "South central"
        },
        {
            name: "Blue Vervain",
            scientificName: "Verbena hastata",
            image: "images/blue_vervain.jpg",
            description: "Blue Vervain is a wildflower native to North America. It is known for its blue flowers.",
            category: "Wildflowers",
            locations: ["Algonquin Park", "Bruce Peninsula", "Muskoka"],
            region: "Southwest"
        },    
    ];

    // Function to display plants
    function displayPlants(plants) {
        plantList.innerHTML = ""; // Clear the existing plant list
        plants.forEach(plant => {
            const plantCard = document.createElement("div");
            plantCard.className = "col-md-4 mb-4"; // Add margin for spacing

                plantCard.innerHTML = `
                    <div class="card h-100 p-3">
                        <img src="${plant.image}" class="card-img-top" alt="${plant.name}">
                        <div class="card-body">
                            <h5 class="card-title">${plant.name}</h5>
                            <p class="card-text"><em>${plant.scientificName}</em></p>
                            <p class="card-text">${plant.description}</p>
                            <button class="btn btn-success mt-2 d-inline-block">Learn More</button>
                        </div>
                        <div class="card-footer d-flex justify-content-center p-3">
                            <small class="text-muted"><strong>Locations:</strong> ${plant.locations.join(", ")}</small>
                        </div>
                    </div>
                `;
                            plantList.appendChild(plantCard);
                        });
                    }
                    displayPlants(plants);

    searchInput.addEventListener("input", event => {
        const searchText = event.target.value.toLowerCase();
        const filteredPlants = plants.filter(
            plant =>
                plant.name.toLowerCase().includes(searchText) ||
                    plant.scientificName.toLowerCase().includes(searchText) ||
                    plant.description.toLowerCase().includes(searchText) ||
                    plant.locations.some(location => location.toLowerCase().includes(searchText)) ||
                    plant.region.toLowerCase().includes(searchText)
                );
            displayPlants(filteredPlants);
        });
        
    // Populate dropdown menu with unique categories
    const categories = ["All", ...new Set(plants.map(plant => plant.category))];

    categories.forEach(category => {
        const categoryItem = document.createElement("li");
        const categoryLink = document.createElement("a");
        categoryLink.className = "dropdown-item";
        categoryLink.href = "javascript:void(0)"; // Prevent navigation entirely
        categoryLink.textContent = category;
        categoryLink.addEventListener("click", () => filterByCategory(category));
        categoryItem.appendChild(categoryLink);
        document.getElementById("category-dropdown").appendChild(categoryItem);
      });

    // Filter plants by category
        function filterByCategory(category) {
            document.getElementById("selected-category").textContent = category; // Update selected category display
            const filteredPlants =
                category === "All" ? plants : plants.filter(plant => plant.category === category);
            displayPlants(filteredPlants);
        }

    // Initially display all plants
    displayPlants(plants);
});

// Form submission
  document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();
    alert(data.message);
  });


document.getElementById('year').textContent = new Date().getFullYear();