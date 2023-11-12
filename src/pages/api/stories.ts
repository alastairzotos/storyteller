// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid';
import arrayShuffle from 'array-shuffle';
import { Story, StoryStatus } from '@/types/stories'

const mockImages = [
  'https://s3-alpha-sig.figma.com/img/40f4/b58e/44265c597f4d0debf3c4f1277c72f407?Expires=1700438400&Signature=mJbzF2SbHpGDJcANxWf3y~tCtibcQR0GlwogLEpuW1c~fgv2Xgizqv1x4biVPVXvFGoIHrMv8J2wE3-oZYUexub2InYQTZqDErePTk0lOrTX-f0rto8ky1S79rQaRY1sKcNZa~xH20r-6SrRtD3IDSrReMPEBqx2FKq06aYy9HpIPdq0ff0Tzmd2LrTYwoZWhXpTsTRL3xKB~htRvpYXIYqN0kZ2WiHuGvRTRGRH9Dg95~yu8EGz0D6tlOityBV3~gKvbCtsLiQXB83cHcFIAFiNNuR4EjPrK852DW0ji0DIn~xzliK7MJuGtaKs-0izvTkO8nhsuZHSbLfWbU7X8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/4ef5/5dda/59083af6dedd82b662aed0ae96901674?Expires=1700438400&Signature=YqnsfnDP1V4ff0r2PlQNbWAjP3cTvruWbqar~Lbjt5WTmUVS1fJOOQcnl-UmCjKb-bOhlb~23G~UlXyTXHAMlpwzVPkkB3iKj4wd0IFeotM2gVfJ7s2d-Unh6rrmjYKuoEXFgZurJh8gu-AEMBBP4R3IyIGN-oyTO2VNmXMN4oAmmxO5k~wbzYbW~F~J1c-bdtG0Q8d9UaE1lHET-zW5-EVY6VWmKFR1qe6vaC1bRxsAX2Kt3-~qHSIktiTY0vJfelcQ52YLRmrcdlWapNc3Vy2gtyn1yfBKWkt9VEEkvcuJ0aWlM-w7GGUsymUWmcJUnGAuhTZybUh7WbD2q8Nu9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/e7b0/bff6/2902781b11d21ab8086a6cccecc7f0fa?Expires=1700438400&Signature=TUsbxKNaWh8bWuT-tn~PFOgEVxH1QHKEqaC3EWoCBqVolhCz2e7cQxaiQlwfU9CIqqMzS8dgigQYXlqbeQqUTnfuQg8nW9a~Iz2i4uG1eh08pBcl2uT3Fk0q1Q69~wiLtnVLRkaTi7ZjwiQWuDFt7RzT5qJluEspVDJlZ8YxVjdUsQZsSnaj8-bDHNzt9mS3J4hZ72BMvVkyjVdmeT~qZjacXxwIYBiobpw5IN8bragSZvQQsdZKs1cSFyFA3JrOT2tNRiNwZkSTZRQMmIdfAtzR2Pyzhf7eo~QNhEpYxyCl7IgEMSoT6gYY9U67nJLybqYgpFuViDXIa2ZNPhvRgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/1af3/cb3f/0a60ba313e967c9c26f3af5339eee6b4?Expires=1700438400&Signature=PCSdgcSic~O8fRj8jsGjvJrJZZBR9CX~E7c0GfeU2Ff0Lwd6yt0JqZKIqnU7KoSidy3Fcswq-vplyOYUod03P2X7hcyYwgMXEUjNQ65jd5X6NWEa8uL8mqcu4faMnUhnTfBJvSooyK8XvZFdrEemTZrYrbrFuMwycQ07U53fm3ZyedCc~wjB904M8Ql1S14x6rd2w3Ow6yjNFSazIMbzgfqb26tRl3huWhfoh8~9UePQTLfJ3uZalK5pU2uIUAd-fD~Ar7cc6GpoRsftLIYgYxPxjMN-GDAaJdJbSdA93r8uIatHCqwBWMgmK8dzRhF4neJBaLnsQSf1SgAsrsLFtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/f504/89b0/895dcc04547bb76da124410d72398e04?Expires=1700438400&Signature=AS13Nyy3u~1~~C0Br-g5CaVBA88wBRjbbB9uqBPvlDcKXESwHxuLg4zzOD5IDHqXKzvnxkZnyv8LB8-K3aAnKxYyMftmGEW-FreVwZmGy4XXaRGyT58EqEA0ftSWjWidXX-0IDRPPVd47fV-0sqivRixt2x3V5ar~pFROBnQE9B5MZdzcyBYG1LSrq4E4RIJxhUFm-dbxZjjpwmWjoCLLagPFD034AYxV67OFsVuEFT87GAYuETObdw3gHSAwOqJCw1NJrtniuCX7EKP7rCCCG859vQDEmHYW87Ulcj4FuPaXioDC3DN-VxGlPMNoz0NQeWJ5YFN8G-txN54Yguzgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/952c/5744/d800298fff4f45a1bec3ef6288356f2d?Expires=1700438400&Signature=aeIq4fEI5we93AzJdPoW5m~WH6K3JmdMqHVvVgXfmyAv0zp-sz13rVucV2r4IyKqUq2lHpH9UVDgwliabHy2S2uLklh3rEKKmDOKyOU~SjtbxMt-snM~gRRN8jsHTeNCPbUVl-8T2QxfB9kn8tsNKTmEDPeGysjx4oZfvhsvRCdZKh1KizV4utM3~foYFUxdYSniBhHge~n09Qak~Ohh3yRTg7g2rBF52Eq4Uw0r~wuM8zfkG45Z5d~l41FkzM-9KJ0rh3bzQzQQ2wHCQjK8FUJHDCmnfYIcN8jEYgfRRagg6KJI905XnFPNDXYLKxpgrNkRBNvzHY06XLvza2uzWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/f750/47a9/641396eaaf1b1ae3f1993a744c7e54ac?Expires=1700438400&Signature=WzAzWMWaDtweF2-C0ANSE464~5DOBEUr03ZMb-461k2RrPZptbldZZOyHtuzZ870dHG-Lv254fPGihDl8YuhYi8lrtuaLeW3lHIEM5sf3UszwY3xplU5NrgGMFFCd1wd8-F8CnRUyZKBjd4FTCh~J7mHkHqay9HRflZiLYs4bH45OFEDAgKMRY6OIahlfHjZ5Q1t8M1UkW23iMMMJCmuBx4cXisGWcIT9~PDQ1P9vHvNGMxQi-30n2GFwwYZonH~grL9q1b1Ij~acMq9I0MqBv-p4f0usz~xgO0eHPLtTqtNxNI89g-mCCxNAaGNQ8vgx4nBGz4rKOURg6UcMuRfmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/eb90/dac1/50beac973d0782ecfefe1c498cc69e53?Expires=1700438400&Signature=WXeSJYvzzvdx~WFAPMEjAVJuK3zwvCQZDLH0CZ-HneF9RSoXyTy3If-VTgz6F-~QP9lv3TEw-67vettmxvOVKi8UzjAp8mkdcI6msKt6hTu1UjilD8ZKuy373fFMK4-LtzV88VPAtF7LcHf-sXunfPy383NzbG5dgTGXNmAPDfeSNuzPR8dfxgxGffH7rZWiETr-0LVNoAZz5NgmUpzvHWbVoNw~7S6D7~3luvgO2sd5-LnoZajrqegc6MQtkDGQTVfEJqwa7L~08EKL8s6QKSj1PRQH4BwqdyhIFHmKShUbI02OdTNIlr6QkCO9Fye3WCfVLWPToFo0hA0FBtC5jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/1af3/cb3f/0a60ba313e967c9c26f3af5339eee6b4?Expires=1700438400&Signature=PCSdgcSic~O8fRj8jsGjvJrJZZBR9CX~E7c0GfeU2Ff0Lwd6yt0JqZKIqnU7KoSidy3Fcswq-vplyOYUod03P2X7hcyYwgMXEUjNQ65jd5X6NWEa8uL8mqcu4faMnUhnTfBJvSooyK8XvZFdrEemTZrYrbrFuMwycQ07U53fm3ZyedCc~wjB904M8Ql1S14x6rd2w3Ow6yjNFSazIMbzgfqb26tRl3huWhfoh8~9UePQTLfJ3uZalK5pU2uIUAd-fD~Ar7cc6GpoRsftLIYgYxPxjMN-GDAaJdJbSdA93r8uIatHCqwBWMgmK8dzRhF4neJBaLnsQSf1SgAsrsLFtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
];

const mockTitles = [
  'Daily Horoscope',
  'Weekly Wallpapers',
  'News',
]

const randomDate = (start: Date, end: Date) => (new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).getTime();

const randomStatus = (seed: number): StoryStatus =>
  seed > 0.75
    ? 'draft'
    : seed > 0.5
      ? 'live'
      : seed > 0.25
        ? 'past'
        : 'scheduled'

const generateRandomStory = (): Story => {
  const seed = Math.random();
  const numPages = 1 + Math.floor(Math.random() * (mockImages.length));

  const today = new Date();
  const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

  return {
    id: uuidv4(),
    title: mockTitles[Math.floor(seed * mockTitles.length)],
    pages: arrayShuffle(mockImages.slice(0, numPages)),
    status: randomStatus(seed),
    lastModified: randomDate(today, nextWeek),
    liveFrom: seed > 0.25 ? randomDate(today, nextWeek) : undefined,
    ends: seed > 0.25 ? randomDate(today, nextWeek) : undefined,
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Story[]>
) {
  const numStories = 20;

  res.status(200).json((new Array(numStories).fill(0).map(() => generateRandomStory())))
}
