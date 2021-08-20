import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  baseUrl: string = null;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + 'music';
  }
  /*Albums*/
    addAlbum(album: any): Promise<any> {
      return this.http.post<any>(this.baseUrl + '/add-album', album).toPromise();
    }
    getAlbum(id: string): Promise<any> {
      return this.http.get<any>(this.baseUrl + '/get-album/' + id).toPromise();
    }
    getAlbums(): Promise<any[]> {
      return this.http.get<any[]>(this.baseUrl + '/get-albums').toPromise();
    }
    editAlbum(album: any): Promise<any> {
      return this.http.put<any>(this.baseUrl + '/edit-album', album).toPromise();
    }
    deleteAlbum(id: string): Promise<any> {
      return this.http.delete<any>(this.baseUrl + '/delete-album/' + id).toPromise();
    }
  /*Albums*/

  /*DSP's*/
    addDSP(dsp: any): Promise<any> {
      return this.http.post<any>(this.baseUrl + '/add-dsp', dsp).toPromise();
    }
    getDSPS(): Promise<any[]> {
      return this.http.get<any[]>(this.baseUrl + '/get-dsps').toPromise();
    }
    deleteDSP(id: string): Promise<any> {
      return this.http.delete<any>(this.baseUrl + '/delete-dsp/' + id).toPromise();
    }
  /*DSP's*/

  /*Socials*/
    addSocial(social: any): Promise<any> {
      return this.http.post<any>(this.baseUrl + '/add-social', social).toPromise();
    }
    getSocials(): Promise<any[]> {
      return this.http.get<any[]>(this.baseUrl + '/get-socials').toPromise();
    }
    editSocial(social: any): Promise<any> {
      return this.http.put<any>(this.baseUrl + '/edit-social', social).toPromise();
    }
    deleteSocial(id: string): Promise<any> {
      return this.http.delete<any>(this.baseUrl + '/delete-social/' + id).toPromise();
    }
  /*Socials*/

  /*Links*/
    addLink(link: any): Promise<any> {
      return this.http.post<any>(this.baseUrl + '/add-link', link).toPromise();
    }
    getLinks(id: string): Promise<any[]> {
      return this.http.get<any[]>(this.baseUrl + '/get-links/' + id).toPromise();
    }
    deleteLink(id: string): Promise<any> {
      return this.http.delete<any>(this.baseUrl + '/delete-link/' + id).toPromise();
    }
  /*Links*/

  /*Songs*/
    getSongs(): Promise<any[]> {
      return this.http.get<any[]>(this.baseUrl + '/get-songs').toPromise();
    }
  /*Songs*/

  /*Sundry*/
    getSocialIconList(): Promise<any[]> {
      return this.http.get<any[]>('../../assets/socialIcons.json').toPromise();
    }
  /*Sundry*/
}
