// ================================
// 1. Liste des produits
// ================================

const products = [
    {
        id: 1,
        name: "Kimono Akatsuki Elegance",
        price: "20 000 FCFA",
        image: "assets/images/Robe avec noeu.jpg",
        description: "Un kimono noir et rouge inspiré de l’univers otaku, avec un design Akatsuki élégant et un nœud majestueux pour un look unique et puissant."
    },
    {
        id: 2,
        name: "Cape Akatsuki Classique",
        price: "25 000 FCFA",
        image: "assets/images/Robe nuage Otaku.jpg",
        description: "La cape incontournable des ninjas renégats : légère, sombre, iconique et parfaite pour tout fan d’univers otaku."
    },
    {
        id: 3,
        name: "Akatsuki Royale",
        price: "18 000 FCFA",
        image: "assets/images/Robe evase.jpg",
        description: "Robe inspirée de l’Akatsuki, avec détails rouges emblématiques et coupe en couches élégante. Un look otaku chic et puissant pour se démarquer."
    },
    {
        id: 4,
        name: "Figurine Nezuko Kamado - Mini Edition",
        price: "10 000 FCFA",
        image: "assets/images/Figurine Nezuko Kamado.jpg",
        description: "Adorable figurine de Nezuko avec son kimono rose iconique et son bambou. Parfaite pour les fans de Demon Slayer et pour décorer ton espace otaku."
    },
    {
        id: 5,
        name: "Hoodie Muichiro - Edition Brume",
        price: "15 000 FCFA",
        image: "assets/images/Pull Muichiro Tokito.jpg",
        description: "Sweat doux et confortable inspiré du Pilier de la Brume. Un style épuré et otaku parfait pour affronter toutes les saisons."
    },
    {
        id: 7,
        name: "Porte-Cles-Ninja (Edition Naruto)",
        price: "2 500 FCFA",
        image: "assets/images/Porte-cles.jpg",
        description: "Porte-clés stylés inspirés des villages et clans légendaires de Naruto. Accessoire parfait pour personnaliser clés, sacs ou tenues otaku."
    },
    {
        id: 8,
        name: "Noeuds Demon Slayer (Collection Kimono)",
        price: "5 000 FCFA",
        image: "assets/images/Noeux.jpg",
        description: "De jolis nœuds inspirés des tenues iconiques de Demon Slayer. Accessoire parfait pour cheveux, sacs ou tenues kawaii."
    },
    {
        id: 9,
        name: "Gobelet Naruto (Edition Konoha)",
        price: "8 000 FCFA",
        image: "assets/images/Mug.jpg",
        description: "Un gobelet stylé aux couleurs de Konoha, avec un mini Naruto sur la paille. Parfait pour les fans qui veulent boire avec classe ! 🌀🍥🌟"
    },
    {
        id: 10,
        name: "Set Accessoires Shinobi (Edition Papillon)",
        price: "10 000 FCFA",
        image: "assets/images/Ensemble collier.jpg",
        description: "Un ensemble élégant inspiré de Shinobu, parfait pour ajouter une touche d’anime chic à ton style. Léger, brillant et super iconique ! 🦋💜🔥"
    },
    {
        id: 11,
        name: "Sneakers Akatsuki Storm",
        price: "12 000 FCFA",
        image: "assets/images/Chaussure.jpg",
        description: "Un ensemble élégant inspiré de Shinobu, parfait pour ajouter une touche d’anime chic à ton style. Léger, brillant et super iconique ! 🦋💜🔥"
    },
    {
        id: 12,
        name: "Bracelet Ninja Legacy",
        price: "5 000 FCFA",
        image: "assets/images/Bracelet.jpg",
        description: "Bracelet charm inspiré de l’univers shinobi, avec symboles iconiques et détails rouges éclatants. Parfait pour les vrais fans au style discret mais puissant. 🔥🌪️"
    },
    {
        id: 13,
        name: "Boucles 'Aube Du Soleil'",
        price: "5 000 FCFA",
        image: "assets/images/boucles d'oreilles.jpg",
        description: "Boucles d’oreilles inspirées du motif du soleil levant, au design épuré et symbolique. Un style unique qui attire l’œil et complète parfaitement un look otaku chic. ☀️✨"
    },
    {
        id: 14,
        name: "Accessoires Inoxydables",
        price: "5 000 FCFA",
        image: "assets/images/Accessoires Inoxydables.jpg",
        description: "Ces articles incluent des pendentifs et une bague associés à l'organisation criminelle Akatsuki (le nuage rouge). Un autre pendentif représente le symbole du village de Konoha (le village caché des feuilles). Ces bijoux sont populaires parmi les fans pour le cosplay ou comme accessoires de mode quotidiens. Ils sont généralement fabriqués en alliage de zinc ou en acier, et sont souvent disponibles en ligne auprès de divers détaillants."
    },
    {
        id: 15,
        name: "Bol Ramen Naruto",
        price: "8 000 FCFA",
        image: "assets/images/Bol/Baguettes.jpg",
        description: "Capacité :Le bol a une contenance d'environ 470 ml (16 oz). Matériau : Il est fabriqué en céramique de haute qualité. Design pratique : Le bol est doté d'un trou et d'une encoche intégrés pour maintenir les baguettes en place. Licence officielle : C'est un produit officiel de Just Funky, inspiré de la série d'anime et de manga Naruto."
    }
];


// ================================
// 2. Page d’accueil (Index.html)
// ================================

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    if (productList) {
        productList.innerHTML = products
            .map(product => `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <a href="DetailsProduits.html?id=${product.id}" class="btn-product">
                        Voir le produit
                    </a>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Ajouter au panier</button>
                </div>
            `)
            .join("");
    }
});


// ================================
// 3. Page DétailsProduits.html
// ================================

document.addEventListener("DOMContentLoaded", () => {
    const detailsContainer = document.getElementById("product-details");

    if (detailsContainer) {
        const params = new URLSearchParams(window.location.search);
        const productId = parseInt(params.get("id"));

        if (!productId) {
            detailsContainer.innerHTML = "<p style='color:white;'>Aucun produit sélectionné.</p>";
            return;
        }

        const product = products.find(p => p.id === productId);

        if (!product) {
            detailsContainer.innerHTML = "<p style='color:white;'>Produit introuvable.</p>";
            return;
        }

        // Affichage du produit
        detailsContainer.innerHTML = `
            <div class="details-card">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">${product.price}</p>
                <p>${product.description || "Aucune description disponible."}</p>
            </div>
        `;
    }
});
function loadCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
}

function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    loadCartCount();
    alert("Produit ajouté au panier !");
}

document.addEventListener("DOMContentLoaded", loadCartCount);

// ===============================
// BARRE DE RECHERCHE DES PRODUITS
// ===============================
document.getElementById("searchInput").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        let productName = card.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            card.style.display = "block";  // Affiche le produit
        } else {
            card.style.display = "none";   // Cache le produit
        }
    });
});