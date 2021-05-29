import { Service } from "services/core";
import { StreamingService, EStreamingState } from 'services/streaming';
import { Inject } from 'services/core/injector';

export class ColorService extends Service {

  @Inject() streamingService: StreamingService;

  private url: string = "http://localhost:3030/api/color"

  init() {
    this.streamingService.streamingStatusChange.subscribe((state) => {
      if(state == EStreamingState.Live) this.setColor(2)
      if(state == EStreamingState.Offline) this.setColor(1)
    })
  }

  setColor(state: number) {

    const url = `${this.url}/set/${state}`;

    const request = new Request(url, { method: 'GET' });

    return this.sendRequest(request);

  }

    getColor() {

    const url = `${this.url}/get/`;

    const request = new Request(url, { method: 'GET' });

    return this.sendRequest(request);

  }

  private async sendRequest(request: Request) : Promise<string> {

    const response = await fetch(request)

    const result = await response.text();

    return result;
  }

}
