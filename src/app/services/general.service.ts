import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private router: Router) { }
  formatDate(val: any): string {
    if (val) {
      return val.slice(0, val.indexOf('T'));
    }
    return null;
  }
  navigate(path: string, id: string) {
    if (id) {
      this.router.navigate([path + '/' + id]);
    } else {
      this.router.navigate([path]);
    }
  }
  /*Sweet Alerts*/
    success(message: string) {
      Swal.fire({
        title: 'Success!',
        text: message,
        icon: 'success',
        timer: 1800,
        timerProgressBar: true,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false
      });
    }
    error(message: string) {
      Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        timer: 1800,
        timerProgressBar: true,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false
      });
    }
    info(message: string) {
      Swal.fire({
        title: 'Info!',
        text: message,
        icon: 'info',
        timer: 1800,
        timerProgressBar: true,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false
      });
    }
    confirmDelete(val: string): Promise<boolean> {
      return new Promise<boolean>((resolve, reject) => {
        Swal.fire({
          title: 'Confirm Delete',
          text: val,
          icon: 'warning',
          confirmButtonColor: 'red',
          confirmButtonText: 'Delete!',
          showCancelButton: true,
          cancelButtonText: 'Cancel',
          focusConfirm: true,
          reverseButtons: true
        }).then(x => {
          if (x.value) {
            resolve(true);
          } else {
            reject(false);
          }
        });
      });
    }
    load(val: Promise<any>): Promise<any> {
      return new Promise((resolve, reject) => {
        /*Swal.fire([{
          title: 'Loading',
          icon: 'info',
          showCancelButton: false,
          showCloseButton: false,
          showConfirmButton: false
          text: message,
          timer: 1800,
          timerProgressBar: true,
        }]);
        val.then(x => {
          Swal.close();
          this.success('Successfully completed!'),
          resolve(x);
        }).catch(x => {
          Swal.close();
          this.error('Could not complete!');
          reject(x);
        });*/
      });
    }
    errorThenNav(message: string, path: string) {
      Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        timer: 1800,
        timerProgressBar: true,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false
      }).then(x => this.router.navigate([path]));
    }
    successThenNav(message: string, path: string) {
      Swal.fire({
        title: 'Success!',
        text: message,
        icon: 'success',
        timer: 1800,
        timerProgressBar: true,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false
      }).then(x => this.router.navigate([path]));
    }
    confirmPageExit(): Promise<boolean> {
      return Swal.fire({
        title: 'Unsaved Changes Alert!',
        text: 'Changes will be lost',
        icon: 'warning',
        confirmButtonColor: 'red',
        confirmButtonText: 'Leave',
        showCancelButton: true,
        cancelButtonText: 'Stay',
        focusConfirm: true,
        reverseButtons: true
      }).then(x => {
        if (x.value) {
          return true;
        } else {
          return false;
        }
      });
    }
  /*Sweet Alerts*/
}
