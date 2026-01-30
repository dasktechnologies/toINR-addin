# toINR: Number to Indian Rupee Converter for Excel

**toINR** is a lightweight Excel Custom Function Add-in designed for the Indian financial context. It converts numerical values into words using the Indian Numbering System (Lakhs and Crores).

## 🚀 Features
* **Indian Format:** Correctly handles `1,00,000` (Lakh) and `10,00,00,000` (Crore).
* **Paisa Support:** Automatically converts decimals into Paisa (e.g., `.25` to `Twenty Five Paisa`).
* **Clean Output:** Appends "Rupees Only" for professional financial reporting.
* **Cloud-Hosted:** Powered by GitHub Pages for seamless integration with Excel Web and Desktop.

## 🛠 Usage
Once the add-in is loaded, use the following formula in any cell:

`=toINR.convertDigits(number)`

### Examples:
| Input | Output |
| :--- | :--- |
| `1234` | One Thousand Two Hundred Thirty Four Rupees Only |
| `150000.50` | One Lakh Fifty Thousand Rupees and Fifty Paisa Only |

## 📦 Installation (Sideloading)
1. Download the `manifest.xml` from this repository.
2. Open **Excel** (Web or Desktop).
3. Go to **Insert > My Add-ins > Upload My Add-in**.
4. Select the `manifest.xml` file.

## 🔒 Privacy & Security
This add-in is open source and runs entirely on the client side. No data is collected, stored, or transmitted to any external servers. 

## ⚖️ License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
**Developed by DASK Technologies Mumbai**
