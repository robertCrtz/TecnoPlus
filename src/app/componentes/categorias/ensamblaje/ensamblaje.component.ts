import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-ensamblaje',
  templateUrl: './ensamblaje.component.html',
  styles: [
  ]
})
export class EnsamblajeComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private auth: AuthService) { }

PCform: FormGroup;
procesadores = [
  {title: 'Ryzen 5 - 1600', price: 178},
  {title: 'Intel Core i5-10600K 4.10 GHz', price: 300},
  {title: 'AMD Ryzen 9 3900X 3.8 GHz BOX', price: 489},
];
motherboards = [
  {title: 'Asus TUF Gaming X570-Plus', price: 200},
  {title: 'Gigabyte B550M DS3H', price: 99},
  {title: 'Gigabyte B450M S2H', price: 65.99},
];
RAMs = [
  {title: 'G.Skill Trident Z RGB DDR4 3200 PC4-25600 16GB 2x8GB CL16', price: 90},
  {title: 'PC-25600 16GB 2x8GB CL16', price: 65},
  {title: 'Corsair Vengeance RGB Pro Optimizado AMD DDR4 3200 16GB 2x8GB CL16', price: 90},
];
HDD = [
  {title: 'Kingston HDD 500GB SATA 3', price: 25},
  {title: 'Seagate BarraCuda 3.5" 1TB SATA 3', price: 35},
  {title: 'Seagate BarraCuda 3.5" 2TB SATA 3', price: 55},
  {title: 'Seagate BarraCuda 3.5" 4TB SATA 3', price: 120}
];
SSD = [
  {title: 'Nfortec Alcyon X 256GB SSD M.2 NVMe', price: 75},
  {title: 'Kingston A400 SSD 480GB', price: 50},
  {title: 'Samsung 970 EVO Plus 500GB SSD NVMe M.2', price: 110},
  {title: 'Samsung 970 EVO Plus 1TB SSD NVMe M.2', price: 210}
];
GPU = [
  {title: 'ASUS Cerberus GeForce GTX 1050 Ti OC Edition 4GB GDDR5', price: 134.99},
  {title: 'Sapphire Nitro+ Radeon RX 5700 XT 8GB GDDR', price: 490},
  {title: 'Sapphire Nitro+ Radeon RX 5500 XT 8GB GDDR6', price: 256},
  {title: 'XFX AMD Radeon RX 5600 XT 14Gbps 6GB GDDR6', price: 340}
];

ngOnInit() {
  this.PCform = this.fb.group({
    PlacaControl: ['AMD']
  });
}

  accederCompra(){
    if (this.auth.estaAutenticado()) {
      this.router.navigateByUrl('/compra');
    } else {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        title: 'Debes iniciar sesión',
        timer: 3000,
        showConfirmButton: true,
      });
      this.router.navigateByUrl('/login');
  }

  }
}
