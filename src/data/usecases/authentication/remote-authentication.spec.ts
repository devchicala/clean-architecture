interface HttpPostClient{
  post: (url: string) => Promise<void>
}

class RemoteAuthentication {
  constructor (private readonly url: string,
    private readonly httpClient: HttpPostClient) {}

  async auth (): Promise<void> {
    return await Promise.resolve()
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    class HttpClientSpy implements HttpPostClient {

    }
    const url = 'any_url'
    const httpClient = HttpClient()
    const sut = new RemoteAuthentication(url)
    await sut.auth()
    expect(httpClient.url).toBe(url)
  })
})
