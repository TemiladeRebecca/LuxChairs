// export const PRODUCTS_LIST = [
//     {
//       id: '001',
//       slug: 'artilleriet-chair',
//       image: 'Artilleriet.jpg',
//       description: 'Artilleriet.jpg',
//       quantity: 'Artilleriet.jpg',
//     },
//     {
//       id: '011',
//       slug: 'bellini-chair',
//       image: 'Bellini-Side-Cab.jpg',
//       description: 'Bellini-Side-Cab.jpg',
//       quantity: 'Bellini-Side-Cab.jpg',
//     },
//     {
//       id: '002',
//       slug: 'betty-ritual-chair',
//       image: 'Betty-Ritual.jpg',
//       description: 'Betty-Ritual.jpg',
//       quantity: 'Betty-Ritual.jpg', 
//     },
//     {
//       id: '003',
//       slug: 'brute-wood-chair',
//       image: 'Brute-Wood.jpg',
//       description: 'Brute-Wood.jpg',
//       quantity: 'Brute-Wood.jpg',
//     },
//     {
//       id: '004',
//       slug: 'chaise-noyar-chair',
//       image: 'Chaise-Noyar.jpg',
//       description: 'Chaise-Noyar.jpg',
//       quantity: 'Chaise-Noyar.jpg',
//     },
//     {
//       id: '005',
//       slug: 'dixie-b-chair',
//       image: 'Dixie-B.jpg',
//       description: 'Dixie-B.jpg',
//       quantity: 'Dixie-B.jpg',
//     },
//     {
//       id: '006',
//       slug: 'fautelli-de-table',
//       image: 'Fautelli-De-Table.jpg',
//       description: 'Fautelli-De-Table.jpg',
//       quantity: 'Fautelli-De-Table.jpg',
//     },
//     {
//       id: '007',
//       slug: 'ikea-chair',
//       image: 'IKEA.jpg',
//       description: 'IKEA.jpg',
//       quantity: 'IKEA.jpg'
//     },
//     {
//       id: '008',
//       slug: 'lacquered-solid-oak',
//       image: 'Lacquered-Solid-Oak.jpg',
//       description: 'Lacquered-Solid-Oak.jpg',
//       quantity: 'Lacquered-Solid-Oak.jpg',
//     },
//     {
//       id: '009',
//       slug: 'mahogany-chair',
//       image: 'Mahogany.jpg',
//       description: 'Mahogany.jpg',
//       quantity: 'Mahogany.jpg',
//     },
//     {
//       id: '010',
//       slug: 'old-wood-revival',
//       image: 'Old-world-Revival.jpg',
//       description: 'Old-world-Revival.jpg',
//       quantity: 'Old-world-Revival.jpg',
//     },
//     {
//       id: '011',
//       slug: 'torch-chair',
//       image: 'Torch.jpg',
//       description: 'Torch.jpg',
//       quantity: 'Torch.jpg',
//     },
//   ];

// export async function fetchProducts() {
//   const url = 'https://api.timbu.cloud/products';
//   const params = {
//       organization_id: 'baeef2ef705c4c299e76bf456f276e05',
//       Appid: 'RHP49RUX9ZORM8Z',
//       Apikey: '3198b6ff1a4141debb22334bc052c85620240712152758922490'
//   };

  // Constructing query string from params
//   const queryString = Object.keys(params)
//       .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//       .join('&');

//   try {
//       const response = await fetch(`${url}?${queryString}`);
//       if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
      
//       console.log(data);
//       return data;
//   } catch (error) {
//       console.error('Error fetching products:', error);
//       throw error;
//   }
// }
