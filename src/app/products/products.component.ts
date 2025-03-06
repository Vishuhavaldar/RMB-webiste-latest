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
      name: 'IBL',
      products: [
        {
          name: 'Industrial Robots',
          image: 'https://ask-ibs.jp/themes/custom/IBSCompany/image/header/logo_ibs_blue.svg',
          description: 'Advanced robotics solutions for automation.',
        },
        {
          name: 'Servo Motors',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Servo_Motor.png',
          description: 'High-precision servo motors for motion control.',
        },
        {
          name: 'Conveyor Systems',
          image: 'https://5.imimg.com/data5/SELLER/Default/2022/5/RG/YZ/QF/6824183/conveyor-500x500.jpg',
          description: 'Customizable conveyor systems for material handling.',
        },
      ],
    },
    {
      name: 'Lintec',
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
