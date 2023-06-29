<script>
    import GradientBall from "../components/GradientBall.svelte";
    import Gallery from "../components/Gallery.svelte"

    let example_gallery = [
        '7.png',
        '8.png',
        '10.png',
        '257.png',
        '259.png',
        '260.png',
        '263.png',
        '264.png',
        '265.png',
        '266.png',
        '267.png',
        '268.png',
        '269.png',
       '270.png',
        '271.png',
        '272.png',
    ]

    let example_attributes = [
        '4x4_0002_Layer-2.png',
        '4x4.png',
        'agavemagico.png',
        'angelcdmx.png',
        'cabezaolmeca.png',
        'calaverabarro.png',
        'corazonhojalata.png',
        'malinche.png',
        'telecolor.png',
    ]
</script>

<div class="flex flex-col items-center font-editorialnew">
    <div class="relative flex justify-center items-center w-full aspect-square max-w-2xl">
        <img src="icons/mosaico_logo.png" alt="">
        <GradientBall/>
    </div>

    <div class="mx-6 max-w-xl pt-10">
        Welcome to Mosaico, where the story of Mexico is recounted through a collection of 10,000 generative NFTs in a way that is both non-linear and captivating. Our unique algorithmic process ensures that each NFT is one-of-a-kind, and we've taken great care to include attributes that are culturally and historically significant.
    </div>
    <div>
        <img src="example_nfts/9.png" alt="">
    </div>

    <div id="#ourstory" class="mx-6 max-w-xl">
        <div class="text-4xl pb-4">History in every tile</div>
        <div class="flex flex-col gap-4">
            <div>
                Mosaics and azulejos have been an important part of Mexican culture for centuries. Mosaics were used in pre-Columbian times as a form of decorative art, and the Spanish introduced azulejos, a type of ceramic tilework that became popular during the colonial period. These intricate designs can be seen in churches, government buildings, and private homes throughout Mexico.
            </div>
            <div>
                Our NFTs draw inspiration from this rich history of decorative art in Mexico. Each attribute, from the color palette to the symbolic elements, has been carefully chosen to create a unique and meaningful representation of Mexican culture. Whether it's an Aztec-inspired geometric pattern or a traditional Mexican embroidery design, each NFT tells a story that is as vibrant and diverse as Mexico itself.
            </div>
        </div>

        <img src="example_nfts/261.png" alt="">
    </div>

    <div class="mx-6 max-w-xl">
        <div class="text-4xl pb-4">The Collection</div>
        <div class="flex flex-col gap-4">
            <div>
                Owning a Mosaico NFT is more than just acquiring a beautiful piece of art. It's about becoming a part of Mexico's rich cultural history. With only 10,000 NFTs available, each one is a rare and valuable addition to any collection. Don't miss your chance to own a piece of Mexico's past and present, captured in a way that is truly unforgettable.
            </div>
        </div>

        <img src="example_nfts/258.png" alt="">
    </div>

    <div class="mx-6 max-w-xl flex flex-col items-center">
        <div class="text-4xl pb-4">Our Inspiration: México</div>
        <div class="flex flex-col gap-4">
            <div>
                Mexico is a country of contrasts. From its bustling cities to its tranquil countryside, its modern skyscrapers to its ancient ruins, there is a constant interplay between the old and the new, the traditional and the modern. Our NFTs capture this dynamic energy, blending historical and cultural elements with modern design and pop culture references.
            </div>
        </div>

        <img class="py-10" src="example_nfts/Group 3142.png" alt="">
    </div>

    <div class="flex justify-center items-end text-white bg-mblue py-48 w-full" style="background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(239, 240, 255, 0.07) 1%, rgba(199, 202, 255, 0.26) 5%, rgba(163, 166, 255, 0.44) 9%, rgba(131, 136, 255, 0.59) 13%, rgba(104, 111, 255, 0.72) 17%, rgba(83, 90, 255, 0.82) 21%, rgba(66, 74, 255, 0.9) 26%, rgba(54, 63, 255, 0.96) 32%, rgba(48, 56, 255, 0.99) 39%, #2E37FF 50%, rgba(48, 56, 255, 0.99) 61%, rgba(54, 63, 255, 0.96) 68%, rgba(66, 74, 255, 0.9) 74%, rgba(83, 90, 255, 0.82) 79%, rgba(104, 111, 255, 0.72) 83%, rgba(131, 136, 255, 0.59) 87%, rgba(163, 166, 255, 0.44) 91%, rgba(199, 202, 255, 0.26) 95%, rgba(239, 240, 255, 0.07) 99%, rgba(255, 255, 255, 0) 100%);">
        <div class="flex flex-col md:flex-row max-w-3xl px-2 items-center">
            <div class="flex flex-col md:w-1/2">
                <div class="text-4xl pb-4">Improving Mexican's Emotional Health: Atentamente</div>
                <div class="flex flex-col gap-4">
                    <div>
                        Atentamente is a Mexican charity focused on contributing to the socio-emotional and mental wellbeing of people through education. It has won multiple awards and acclaims in its innovative educational practices, and it works in the public and private sphere by educating individuals, teachers and government officials in how to lead a ethical, balanced lifestyle. 
                    </div>
                    <div>
                        <span class="font-bold text-lg">We will donate 20% of all proceeds</span> of MOSAICO  towards Atentamente, and will inform the community about these charitable donations to ensure maximum transparency. 
                    </div>
                </div>
                <div class="pt-4">
                    <a href="https://www." class="px-4 py-2 rounded-full bg-white text-mblue w-full">VISIT THEIR WEBSITE</a>
                </div>
            </div>

            <div class="w-2/3 md:w-1/2">
                <img src="images/atentamente/6349afdbab32351af8d16ce6_Hero-Image.png" alt="">
            </div>

        </div>
    </div>

    <div class="flex justify-center items-end">
        <div class="flex flex-col md:flex-row max-w-3xl px-2 justify-center">
            <div class="flex flex-col md:w-2/3">
                <div class="text-4xl pb-4">Generative Artwork</div>
                <div class="flex flex-col gap-4">
                    <div>
                        Generative NFTs are the new frontier in digital art, and at Mosaico, we've embraced this technology. Each of our 10,000 NFTs is generated through a programming process that allows for a near-infinite number of variations. Generative NFTs use algorithms to create unique images based on a set of rules and parameters. This means that no two NFTs in our collection are exactly alike, and each one is a true original. 
                    </div>
                    <div>
                        To create our collection, we  created a set of attributes that represent different aspects of Mexican history, culture, and society, and then programmed these attributes into our generative process. 
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <img src="example_nfts/258.png" alt="">
            </div>

        </div>
    </div>
    <!-- <div class="flex w-full gap-12 py-24 overflow-hidden">
        {#each [...Array(50)] as i}
            <img src="example_nfts/AzulejoAmarillo.png" alt="">

        {/each}
    </div> -->

    <div class="m-20">
        <img src="example_nfts/110.png" alt="">
    </div>

    <div class="flex mx-6 max-w-3xl justify-center items-center gap-10">
        <div class="flex flex-col w-2/3">
            <div class="text-4xl">The Attributes</div>
            <div>
                <div>
                    Our collection features a wide range of attributes, each carefully selected to capture the rich diversity of Mexican heritage...... etc etc
                </div>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-2 w-1/2">
            {#each example_attributes as attribute}
                <img src="images/atributos/{attribute}" alt="">
            {/each}
        </div>
    </div>


    <div id="gallery" class="mx-6 max-w-2xl">
        <div class="text-4xl text-center py-10">Gallery</div>
 

        <Gallery example_gallery={example_gallery}/>
        <!-- <div class="grid grid-cols-4 justify-items-center items-center gap-2 max-w-2xl">
            {#each example_gallery as nft}
                <img src="example_gallery/{nft}" alt="">
            {/each}
        </div> -->
    </div>
    
</div>