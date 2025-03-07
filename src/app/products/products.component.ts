import { CommonModule } from '@angular/common'; 
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductSectionComponent {
  categories = [
    {
      name: 'CKD',
      products: [
        {
          name: 'Air booster',
          image: 'assets/images/airbooster.png',
          description: 'Enables air boosting by using only air pressure in combination with air tanks to raise the primary pressure two-fold (0.99 MPa max.)',
        },
        
        {
          name: 'Karman Vortex Flow Sensor FLUEREX',
          image: 'assets/images/karmavortex.png',
          description: 'Karman vortex flow sensor that covers 0.4 to 250 L/min. Switch setting for various outputs can be made and IO-Link communication is supported.',
        },
        
        {
          name: 'Tie rod cylinder',
          image: 'assets/images/tirrodcylinder.png',
          description: 'Medium bore size (φ32 to φ100) series of standard tie rod cylinders. Environment-friendly cylinder that has eliminated hazardous substances.',
        },
        {
          name: 'Electronic pressure switch with digital display',
          image: 'assets/images/ppg-electronic-switch.png',
          description: 'A compact 1-screen 2-color display pressure switch of □31 mm. Compatible with protection degree IP65.',
        },
        {
          name: 'FP* Series for Food manufacturing processes Filter / regulator',
          image: 'assets/images/w100-food.png',
          description: 'New Series using integrated filter and regulator, 5μm elements for dust removal, and 0.3μm elements for tar removal.',
        },
        {
          name: 'Nitrogen gas extraction unit',
          image: 'assets/images/nitrogen-gas-gen.png',
          description: 'It easily separates and purifies the high-purity nitrogen necessary for oxidation-proof and explosion-proof applications from compressed air.',
        },
        {
          name: 'ABSODEX',
          image: 'assets/images/ax.png',
          description: 'All actuators use absolute type position detectors.The driver and actuator can be used in combination.It is a product that can be used in a wide range of applications such as assembly',
        },
        {
          name: 'Fitting',
          image: 'assets/images/gw.png',
          description: 'Push-in fitting for pneumatic piping. Compact size for space saving. Work environment and device-friendly flame-resistant white body.',
        },
        {
          name: 'Rodless cylinder',
          image: 'assets/images/sr13.png',
          description: 'Resistant to high load and durable. High-speed rodless cylinder Series runs from φ12 to φ100 with a variety of choices.',
        },
        {
          name: 'Digital pressure sensor',
          image: 'assets/images/ppx.png',
          description: 'A compact 2-screen 3-color display pressure sensor of □30 mm.',
        },
        {
          name: 'P5* / P7* Series for Cleanrooms Compact Flow Rate Sensor RAPIFLOW',
          image: 'assets/images/flowrate-sensor.png',
          description: 'resistant specifications (IP65) addedWith just this 1 device, 5 types of gases are compatible: air, nitrogen, argon, carbon dioxide gas and mixed gases',
        },
        
      ],
    },
    {
      name: 'IBS',
      products: [
        {
          name: 'Diaphragm Pump',
          image: 'assets/images/diaphragm-pump.png',
          description: 'Diaphragm Pumps have numerous types that can handle both gases and liquids with excellent precision and reliability. Diaphragm pumps from IBS Japan, such as the FD series, are available in a variety of sizes and features to suit a wide range of applications.',
        },
        {
          name: 'Metal Bellows Pump',
          image: 'assets/images/mettal-bellow-pump.png',
          description: 'Metal Bellows Pumps are intended for use when precise, leak-free performance is required. This device is suited for applications such as handling helium or fluorine in semiconductor and nuclear processes, where gas loss prevention is vital.',
        },
        {
          name: 'Nitrogen Gas Generator',
          image: 'https://product.ask-ibs.jp/html/upload/save_image/1227154228_658bc75486fdd.jpg',
          description:'Nitrogen Gas Generators offer efficient and dependable on-demand nitrogen generation solutions for a wide range of industrial applications. These generators use Pressure Swing Adsorption (PSA) technology to separate nitrogen from ambient air and supply high-purity gas, enabling applications that require continuous nitrogen supplies without the requirement for storage or delivery logistics.'
        },
        {
          name: 'Oxygen Gas Generator',
          image: 'https://product.ask-ibs.jp/html/upload/save_image/1227153212_658bc4ec07212.jpg',
          description:'The Oxygen Gas Generators use PSA (Pressure Swing Adsorption) technology to produce a consistent oxygen output, with purity values of up to 90% among models. The series key characteristics include integrated oil-free compressors, touch-panel controls for ease of operation, and oxygen concentration sensors, which ensure a high level of automation and little maintenance.'
        },
        {
          name: 'Check Valve',
          image: 'https://product.ask-ibs.jp/html/upload/save_image/1003173510_651bd23e6f8f7.jpg',
          description:'IBS provides a selection of check valves developed for a variety of industrial applications that are noted for their durability and dependability. These valves are suited for use in a wide range of systems that require unidirectional flow control, and they frequently include features like as high-pressure tolerance and compatibility with various media.'
        },
        {
          name: 'Relief Valve',
          image: 'https://product.ask-ibs.jp/html/upload/save_image/0707170839_64a7c8074b6c5.jpg',
          description:'Relief valves are designed for specific industrial applications, with a focus on efficient pressure management and control. They are designed for low-pressure applications, ranging from air pressure to low-pressure settings. It ensures solid sealing and great reproducibility, making it perfect for accurate pressure control in low-pressure circuits.'
        },
        {
          name: 'Needle Valve',
          image: 'https://product.ask-ibs.jp/html/upload/save_image/1005150213_651e5165cf509.jpg',
          description:"IBS's Needle Valves which are specifically designed for precision flow control and features a non-rotating needle construction for smooth and accurate regulation. They are available in brass or stainless steel, with a fluor rubber (FKM) seal as standard, assuring compatibility with gases and liquids."
        },


      ],
    },
    {
      name: 'LINTEC',
      products: [
        {
          name: 'Labeling Machines',
          image: 'https://www.lintec.co.jp/en/wp-content/uploads/sites/2/2021/02/products_001.jpg',
          description: 'High-speed labeling machines for various industries.',
        },
        {
          name: 'Adhesive Solutions',
          image: 'https://www.lintec.co.jp/en/wp-content/uploads/sites/2/2021/02/products_002.jpg',
          description: 'Innovative adhesive solutions for industrial applications.',
        },
        {
          name: 'Printing Equipment',
          image: 'https://www.lintec.co.jp/en/wp-content/uploads/sites/2/2021/02/products_003.jpg',
          description: 'Advanced printing equipment for high-quality prints.',
        },
      ],
    },
  ];

  selectedCategory = 'CKD';
  enquire(productName: string) {
    alert('Enquiry for: ' + productName);
  }

  get filteredProducts() {
    return this.categories.find((c) => c.name === this.selectedCategory)?.products || [];
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
