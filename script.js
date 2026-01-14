// Current product data for modal
let currentProduct = null

// Product descriptions
const productDescriptions = {
  "Bouquet Mawar":
    "Rangkaian bunga mawar merah yang elegan, sempurna untuk mengungkapkan cinta dan kasih sayang di setiap momen istimewa.",
  "Bouquet Mix":
    "Kombinasi indah berbagai bunga segar pilihan, menciptakan harmoni warna yang memukau dan menyegarkan.",
  "Birthday Cake Small":
    "Kue ulang tahun berukuran kecil yang sempurna untuk perayaan intim, dibuat dengan bahan berkualitas premium.",
  "Birthday Cake Custom":
    "Kue ulang tahun custom sesuai keinginan Anda, dengan desain unik dan rasa yang tak terlupakan.",
}

// Open modal when product is clicked
function openModal(card) {
  const modal = document.getElementById("productModal")
  const productName = card.querySelector(".product-name").textContent
  const productPrice = card.querySelector(".product-price").textContent
  const productImage = card.querySelector(".product-image").src

  currentProduct = {
    name: productName,
    price: productPrice,
    image: productImage,
  }

  document.getElementById("modalImage").src = productImage
  document.getElementById("modalName").textContent = productName
  document.getElementById("modalPrice").textContent = productPrice
  document.getElementById("modalDescription").textContent =
    productDescriptions[productName] || "Produk berkualitas pilihan kami."

  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

// Close modal
function closeModal() {
  const modal = document.getElementById("productModal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("productModal")
  if (event.target === modal) {
    closeModal()
  }
}

// Order via WhatsApp
function orderViaWhatsapp() {
  if (!currentProduct) return

  const phoneNumber = "6289533176273"
  const message = `Halo Novika Bouquet, saya tertarik dengan produk ${currentProduct.name}`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  window.open(whatsappUrl, "_blank")
}

// Smooth scroll to products section
function scrollToProducts() {
  const productsSection = document.getElementById("products")
  productsSection.scrollIntoView({ behavior: "smooth" })
}
