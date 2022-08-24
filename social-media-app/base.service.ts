import fetch, { Headers, Response } from "node-fetch";
import https from "node:https";

export class Service {
  // URL
  private baseUrl: string = "https://audacia-training-automationtesting-api.azurewebsites.net/";

  httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
  // Headers
  getHeaders(): any {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
  }

  // GET
  async get(endpoint: string): Promise<any> {
    // endpoint = "users/4"
    const headers = this.getHeaders();

    const info = {
      method: "GET",
      headers: headers,
      agent: this.httpsAgent,
    };
    const urlToRequest: string = this.baseUrl + endpoint;
    console.log(urlToRequest);
    return new Promise((resolve, reject) => {
      fetch(this.baseUrl + endpoint, info).then((res) =>
        this.parseJsonResponse(res, resolve, reject)
      );
    });
  }

  // POST
  async post(endpoint: string, payload: any): Promise<any> {
    const headers = this.getHeaders();

    return new Promise((resolve, reject) => {
      fetch(this.baseUrl + endpoint, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
        agent: this.httpsAgent,
      }).then((res) => this.parseJsonResponse(res, resolve, reject));
    });
  }

  // PUT
  async put(endpoint: string, payload: any): Promise<any> {
    const headers = this.getHeaders();

    return new Promise((resolve, reject) => {
      fetch(this.baseUrl + endpoint, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(payload),
        agent: this.httpsAgent,
      }).then((res) => this.parseJsonResponse(res, resolve, reject));
    });
  }

  // DELETE
  async delete(endpoint: string): Promise<any> {
    const headers = this.getHeaders();

    return new Promise((resolve, reject) => {
      fetch(this.baseUrl + endpoint, {
        method: "DELETE",
        headers: headers,
        agent: this.httpsAgent,
      }).then((res) => this.parseJsonResponse(res, resolve, reject));
    });
  }

  // JSON helper
  public parseJsonResponse(
    res: Response,
    resolve: (value: unknown) => void,
    reject: (value: unknown) => void
  ) {
    res
      .text()
      .then((text) => {
        if (text) {
          try {
            const data = JSON.parse(text);
            resolve(data);
          } catch (text) {
            resolve(text);
          }
        } else {
          resolve(text);
        }
      })
      .catch((err) => {
        reject(err);
      });
  }
}
