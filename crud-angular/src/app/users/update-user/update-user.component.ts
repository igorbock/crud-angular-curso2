import { RequestUpdate } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id!: string | null;
  request!: RequestUpdate;

  constructor(private userService: UserService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ''
      }
    });
  }

  update(){
    this.userService.updateUser(this.id, this.request).subscribe(res =>
      alert(`Atualizado em: ${res.updateAt}/nNome: ${res.name}/nProfissão: ${res.job}`));
  }

}
