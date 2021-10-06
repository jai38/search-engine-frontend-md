let result = document.querySelector(".result"),
  img_result = document.querySelector(".img-result"),
  img_w = document.querySelector(".img-w"),
  img_h = document.querySelector(".img-h"),
  options = document.querySelector(".options"),
  save = document.querySelector(".save"),
  dwn = document.querySelector(".download"),
  upload = document.querySelector("#file-input"),
  cropper = "",
  productsDiv = document.querySelector(".products-container");

// on change show image with crop options
upload.addEventListener("change", (e) => {
  if (e.target.files.length) {
    // start file reader
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target.result) {
        // create new image
        let img = document.createElement("img");
        img.id = "image";
        img.src = e.target.result;
        // clean result before
        result.innerHTML = "";
        // append new image
        result.appendChild(img);
        // show save btn and options
        save.classList.remove("hide");
        options.classList.remove("hide");
        // init cropper
        cropper = new Cropper(img);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

// save on click
save.addEventListener("click", async (e) => {
  e.preventDefault();
  // get result to data uri
  let imgSrc = cropper
    .getCroppedCanvas({
      width: img_w.value, // input value
    })
    .toDataURL();
  //   const res = await fetch("https://products.free.beeceptor.com", {
  //     method: "POST",
  //     body: JSON.stringify({ imgSrc }),
  //   });
  //   const json = await res.json();
  const json = [
    {
      Series: "Hi-Gloss",
      "Manufacturer SKU": "Aaras Gold A & B",
      Brand: "Varmora",
      Description: "",
      "Product Name": "Aaras Gold A & B",
      Currency: "INR",
      "Price per SFT": null,
      "Price per SQM": null,
      "Price Range SFT (Lower Limit)": null,
      "Price Range SFT (Upper Limit)": null,
      Category: "Floor Tiles",
      Type: "Marble",
      "Thickness (mm)": "9",
      Color: "Gold",
      Pattern: "",
      Finish: "High Gloss",
      "Collection Name": "Gvt",
      Location: "",
      "Sample dimension (in x in)": "6 x 6",
      "Tile Size (mmxmm)": "600 x 600",
      "Coverage area in sqft": 15.5,
      "Coverage area in sqm": "1.44",
      "Weight per Box lower limit": "28",
      "Weight per Box upper limit": null,
      Origin: "",
      "Color Family": "",
      "Packing Size": "4",
      Features: "",
      Application: ["Wall,Floor", "", ""],
      "Product Images 1":
        "https://2ls7fs2o7rm7po070i76iz1a-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Aaras-Gold_P.jpg",
      "Product Images 2":
        "https://2ls7fs2o7rm7po070i76iz1a-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Aaras-Gold-AB_L.jpg",
      "Product Images 3":
        "https://2ls7fs2o7rm7po070i76iz1a-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Aaras-Gold-A_T.jpg",
      "Product Images 4":
        "https://2ls7fs2o7rm7po070i76iz1a-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Aaras-Gold-B_T.jpg",
      "Product Images 5": "",
      "Product Images 6": "",
      "Product Images 7": "",
      "Product Images 8": "",
      "Product Images 9": "",
      "Product Images 10": "",
      FIELD42: "",
      FIELD43: "",
      FIELD44: "",
      FIELD45: "",
      FIELD46: "",
      FIELD47: "",
      FIELD48: "",
    },
    {
      Series: "Rocker Plus",
      "Manufacturer SKU": "Aaras White",
      Brand: "Varmora",
      Description: "",
      "Product Name": "Aaras White",
      Currency: "INR",
      "Price per SFT": null,
      "Price per SQM": null,
      "Price Range SFT (Lower Limit)": null,
      "Price Range SFT (Upper Limit)": null,
      Category: "Floor Tiles",
      Type: "Marble",
      "Thickness (mm)": "9",
      Color: "White",
      Pattern: "",
      Finish: "Rocker",
      "Collection Name": "Gvt",
      Location: "",
      "Sample dimension (in x in)": "6 x 6",
      "Tile Size (mmxmm)": "600 x 1200",
      "Coverage area in sqft": 15.5,
      "Coverage area in sqm": "1.44",
      "Weight per Box lower limit": "29.8",
      "Weight per Box upper limit": null,
      Origin: "",
      "Color Family": "",
      "Packing Size": "2",
      Features: "",
      Application: ["Wall,Floor", "", ""],
      "Product Images 1":
        "https://2ls7fs2o7rm7po070i76iz1a-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Aaras-white_P.jpg",
      "Product Images 2":
        "https://2ls7fs2o7rm7po070i76iz1a-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Aaras-white_L.jpg",
      "Product Images 3":
        "https://2ls7fs2o7rm7po070i76iz1a-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Aaras-white_T1.jpg",
      "Product Images 4":
        "https://2ls7fs2o7rm7po070i76iz1a-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Aaras-white_T2.jpg",
      "Product Images 5":
        "https://2ls7fs2o7rm7po070i76iz1a-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Aaras-white_T3.jpg",
      "Product Images 6":
        "https://2ls7fs2o7rm7po070i76iz1a-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Aaras-white_T4.jpg",
      "Product Images 7": "",
      "Product Images 8": "",
      "Product Images 9": "",
      "Product Images 10": "",
      FIELD42: "",
      FIELD43: "",
      FIELD44: "",
      FIELD45: "",
      FIELD46: "",
      FIELD47: "",
      FIELD48: "",
    },
  ];
  productsDiv.innerHTML = "";
  json.forEach((product) => {
    let image = document.createElement("img");
    image.width = 200;
    image.height = 200;
    image.src = product["Product Images 1"];
    let name = document.createElement("h3");
    name.innerHTML = product["Product Name"];
    let productElement = document.createElement("div");
    productElement.setAttribute("class", "product-element");
    productElement.appendChild(image);
    productElement.appendChild(name);
    productsDiv.appendChild(productElement);
  });
});
