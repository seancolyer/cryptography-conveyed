var journalismData = [
    {code: 'FI', value: 7.52, name: "Finland"},
    {code: 'NO', value: 7.75, name: "Norway"},
    {code: 'DK', value: 8.24, name: "Denmark"},
    {code: 'NL', value: 9.22, name: "Netherlands"},
    {code: 'SE', value: 9.47, name: "Sweden"},
    {code: 'NZ', value: 10.06, name: "New Zealand"},
    {code: 'AT', value: 10.85, name: "Austria"},
    {code: 'CA', value: 10.99, name: "Canada"},
    {code: 'JM', value: 11.18, name: "Jamaica"},
    {code: 'EE', value: 11.19, name: "Estonia"},
    {code: 'IE', value: 11.2, name: "Ireland"},
    {code: 'DE', value: 11.47, name: "Germany"},
    {code: 'CZ', value: 11.62, name: "Czech Republic"},
    {code: 'SK', value: 11.66, name: "Slovakia"},
    {code: 'BE', value: 11.98, name: "Belgium"},
    {code: 'CR', value: 12.26, name: "Costa Rica"},
    {code: 'NA', value: 12.5, name: "Namibia"},
    {code: 'PL', value: 12.71, name: "Poland"},
    {code: 'LU', value: 13.61, name: "Luxembourg"},
    {code: 'CH', value: 13.85, name: "Switzerland"},
    {code: 'IS', value: 13.87, name: "Iceland"},
    {code: 'GH', value: 15.5, name: "Ghana"},
    {code: 'UY', value: 15.94, name: "Uruguay"},
    {code: 'CY', value: 16.52, name: "Cyprus"},
    {code: 'AU', value: 17.03, name: "Australia"},
    {code: 'PT', value: 17.11, name: "Portugal"},
    {code: 'LI', value: 17.67, name: "Liechtenstein"},
    {code: 'LV', value: 18.12, name: "Latvia"},
    {code: 'SR', value: 18.2, name: "Suriname"},
    {code: 'BZ', value: 18.54, name: "Belize"},
    {code: 'LT', value: 18.8, name: "Lithuania"},
    {code: 'AD', value: 19.87, name: "Andorra"},
    {code: 'ES', value: 19.95, name: "Spain"},
    {code: 'GB', value: 20, name: "United Kingdom"},
    {code: 'SI', value: 20.55, name: "Slovenia"},
    {code: 'CV', value: 20.69, name: "Cape Verde"},
    {code: 'AG', value: 21.02, name: "OECS"},
    {code: 'FR', value: 21.15, name: "France"},
    {code: 'ZA', value: 22.06, name: "South Africa"},
    {code: 'WS', value: 22.32, name: "Samoa"},
    {code: 'TT', value: 22.39, name: "Trinidad and Tobago"},
    {code: 'BW', value: 22.91, name: "Botswana"},
    {code: 'CL', value: 23, name: "Chile"},
    {code: 'TO', value: 23.37, name: "Tonga"},
    {code: 'SV', value: 23.66, name: "El Salvador"},
    {code: 'BF', value: 23.79, name: "Burkina Faso"},
    {code: 'NE', value: 23.85, name: "Niger"},
    {code: 'MT', value: 24.16, name: "Malta"},
    {code: 'US', value: 24.41, name: "United States"},
    {code: 'KM', value: 24.52, name: "Comoros"},
    {code: 'TW', value: 24.83, name: "Taiwan"},
    {code: 'RO', value: 24.9, name: "Romania"},
    {code: 'HT', value: 25.08, name: "Haiti"},
    {code: 'MN', value: 25.25, name: "Mongolia"},
    {code: 'MR', value: 25.27, name: "Mauritania"},
    {code: 'PG', value: 25.87, name: "Papua New Guinea"},
    {code: 'AR', value: 26.11, name: "Argentina"},
    {code: 'HR', value: 26.12, name: "Croatia"},
    {code: 'MW', value: 26.41, name: "Malawi"},
    {code: 'KR', value: 26.55, name: "Republic of Korea"},
    {code: 'JP', value: 26.95, name: "Japan"},
    {code: 'GY', value: 27.21, name: "Guyana"},
    {code: 'DO', value: 27.31, name: "Dominican Republic"},
    {code: 'MG', value: 27.43, name: "Madagascar"},
    {code: 'HU', value: 27.44, name: "Hungary"},
    {code: 'BA', value: 27.51, name: "Bosnia and Herzegovina"},
    {code: 'RS', value: 27.66, name: "Serbia"},
    {code: 'MU', value: 27.69, name: "Mauritius"},
    {code: 'GE', value: 27.7, name: "Georgia"},
    {code: 'HK', value: 27.76, name: "Hong Kong"},
    {code: 'SN', value: 27.77, name: "Senegal"},
    {code: 'MD', value: 27.85, name: "Republic of Moldova"},
    {code: 'IT', value: 27.94, name: "Italy"},
    {code: 'NI', value: 27.94, name: "Nicaragua"},
    {code: 'TZ', value: 28.09, name: "United Republic Of Tanzania"},
    {code: '??', value: 28.33, name: "Cyprus North"},
    {code: 'LS', value: 28.36, name: "Lesotho"},
    {code: 'AM', value: 28.43, name: "Armenia"},
    {code: 'SL', value: 28.47, name: "Sierra Leone"},
    {code: 'TG', value: 28.5, name: "Togo"},
    {code: 'GW', value: 28.7, name: "Guinea-Bissau"},
    {code: 'AL', value: 28.77, name: "Albania"},
    {code: 'PA', value: 28.98, name: "Panama"},
    {code: 'BJ', value: 29.24, name: "Benin"},
    {code: 'MZ', value: 29.98, name: "Mozambique"},
    {code: 'CI', value: 30.45, name: "Côte d'Ivoire"},
    {code: '??', value: 30.63, name: "Kosovo"},
    {code: 'KG', value: 30.69, name: "Kyrgyzstan"},
    {code: 'LR', value: 30.78, name: "Liberia"},
    {code: 'KW', value: 30.84, name: "Kuwait"},
    {code: 'GR', value: 31.01, name: "Greece"},
    {code: 'PE', value: 31.21, name: "Peru"},
    {code: 'FJ', value: 31.28, name: "Fiji"},
    {code: 'BO', value: 31.29, name: "Bolivia"},
    {code: 'GA', value: 31.38, name: "Gabon"},
    {code: 'SC', value: 31.55, name: "Seychelles"},
    {code: 'UG', value: 31.65, name: "Uganda"},
    {code: 'LB', value: 31.81, name: "Lebanon"},
    {code: 'BR', value: 31.93, name: "Brazil"},
    {code: 'KE', value: 32.07, name: "Kenya"},
    {code: 'IL', value: 32.09, name: "Israel"},
    {code: 'GN', value: 32.56, name: "Guinea"},
    {code: 'TL', value: 32.63, name: "Timor-Leste"},
    {code: 'BT', value: 32.65, name: "Bhutan"},
    {code: 'NP', value: 32.71, name: "Nepal"},
    {code: 'BG', value: 32.91, name: "Bulgaria"},
    {code: 'CG', value: 33, name: "Republic of the Congo"},
    {code: 'EC', value: 33.65, name: "Ecuador"},
    {code: 'PY', value: 33.74, name: "Paraguay"},
    {code: 'CF', value: 33.84, name: "Central African"},
    {code: 'NG', value: 34.09, name: "Nigeria"},
    {code: 'MV', value: 34.32, name: "Maldives"},
    {code: 'ZM', value: 34.35, name: "Zambia"},
    {code: 'ME', value: 34.63, name: "Montenegro"},
    {code: 'QA', value: 35.35, name: "Qatar"},
    {code: 'TJ', value: 36.19, name: "Tajikistan"},
    {code: 'MK', value: 36.26, name: "Macedonia"},
    {code: 'ML', value: 36.33, name: "Mali"},
    {code: 'DZ', value: 36.63, name: "Algeria"},
    {code: 'AE', value: 36.73, name: "United Arab Emirates"},
    {code: 'BN', value: 36.76, name: "Brunei Darussalam"},
    {code: 'AF', value: 37.44, name: "Afghanistan"},
    {code: 'AO', value: 37.84, name: "Angola"},
    {code: 'GT', value: 37.92, name: "Guatemala"},
    {code: 'SS', value: 38.04, name: "South Sudan"},
    {code: 'TN', value: 38.68, name: "Tunisia"},
    {code: 'OM', value: 38.83, name: "Oman"},
    {code: 'CO', value: 39.08, name: "Colombia"},
    {code: 'UA', value: 39.1, name: "Ukraine"},
    {code: 'MA', value: 39.19, name: "Morocco"},
    {code: 'ZW', value: 39.19, name: "Zimbabwe"},
    {code: 'HN', value: 39.27, name: "Honduras"},
    {code: 'CM', value: 39.63, name: "Cameroon"},
    {code: 'TH', value: 40.07, name: "Thailand"},
    {code: 'TD', value: 40.17, name: "Chad"},
    {code: 'IN', value: 40.49, name: "India"},
    {code: 'VE', value: 40.61, name: "Venezuela"},
    {code: 'ID', value: 40.75, name: "Indonesia"},
    {code: 'KH', value: 40.99, name: "Cambodia"},
    {code: 'PS', value: 41.01, name: "Palestine"},
    {code: 'PH', value: 41.19, name: "Philippines"},
    {code: 'ET', value: 41.83, name: "Ethiopia"},
    {code: 'JO', value: 42.07, name: "Jordan"},
    {code: 'MM', value: 42.08, name: "Myanmar"},
    {code: 'BI', value: 42.93, name: "Burundi"},
    {code: 'BD', value: 42.95, name: "Bangladesh"},
    {code: 'MY', value: 43.29, name: "Malaysia"},
    {code: 'MX', value: 43.69, name: "Mexico"},
    {code: 'TR', value: 44.16, name: "Turkey"},
    {code: 'CD', value: 44.31, name: "The Democratic Republic Of The Congo"},
    {code: 'GM', value: 44.5, name: "Gambia"},
    {code: 'RU', value: 44.97, name: "Russian Federation"},
    {code: 'SG', value: 45.87, name: "Singapore"},
    {code: 'LY', value: 45.99, name: "Libya"},
    {code: 'SZ', value: 47.28, name: "Swaziland"},
    {code: 'IQ', value: 47.76, name: "Iraq"},
    {code: 'BY', value: 47.98, name: "Belarus"},
    {code: 'EG', value: 50.17, name: "Egypt"},
    {code: 'PK', value: 50.46, name: "Pakistan"},
    {code: 'KZ', value: 53.46, name: "Kazakhstan"},
    {code: 'RW', value: 56.57, name: "Rwanda"},
    {code: 'AZ', value: 58.41, name: "Azerbaijan"},
    {code: 'BH', value: 58.69, name: "Bahrain"},
    {code: 'SA', value: 59.41, name: "Saudi Arabia"},
    {code: 'LK', value: 60.28, name: "Sri Lanka"},
    {code: 'UZ', value: 61.14, name: "Uzbekistan"},
    {code: 'GQ', value: 66.23, name: "Equatorial Guinea"},
    {code: 'YE', value: 66.36, name: "Yemen"},
    {code: 'CU', value: 70.21, name: "Cuba"},
    {code: 'DJ', value: 71.04, name: "Djibouti"},
    {code: 'LA', value: 71.25, name: "Lao People's Democratic Republic"},
    {code: 'SO', value: 72.31, name: "Somalia"},
    {code: 'IR', value: 72.32, name: "Islamic Republic of Iran"},
    {code: 'SD', value: 72.34, name: "Sudan"},
    {code: 'VN', value: 72.63, name: "Vietnam"},
    {code: 'CN', value: 73.55, name: "China"},
    {code: 'SY', value: 77.29, name: "Syrian Arab Republic"},
    {code: 'TM', value: 80.83, name: "Turkmenistan"},
    {code: 'KP', value: 83.25, name: "Democratic People's Republic of Korea"},
    {code: 'ER', value: 84.86, name: "Eritrea"}
];
