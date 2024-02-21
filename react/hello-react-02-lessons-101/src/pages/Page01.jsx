export default function Page01() {
    return (
        <section>
            <h1>Jsx kuralları</h1>
            <ul>
                <li>Bütün etiketler kapatılmalıdır.Self closing de olsa, iki parçalı etiket de olsa kapatılmalı</li>
                <li>
                    Komşu jsx elemanları onları saran tek bir jsx elemanı içinde olmalılar.
                </li>
                <li>
                    Komşu elemanları sarmak için fazladan eleman istemiyorsan. React.Fragment kullanabilirsin
                </li>
                <li>
                    jsx elemanları üzerine property-value çiftleri konabilir
                </li>
                <li>
                    Neredeyse tüm property adları camel-case kullanılır
                </li>
                <li>
                    class yerine className adı tercih edilmelidir.
                </li>
            </ul>

            <img src="/vite.svg" alt="vite" />
        </section>
    )
}