<script>
    let team = [
        {
            image: 'images/team/IMG_5313.JPG',
            name: 'ATOMIKA',
            role: 'Illustrator',
        },
        {
            image: 'images/team/IMG_5312.JPG',
            name: 'TSUNAMI',
            role: 'Creative Director',
        },
        {
            image: 'images/team/Untitled_Artwork.jpg',
            name: 'MACHIM',
            role: 'Project Manager',
        },
        {
            image: 'images/team/Untitled_Artwork(1).jpg',
            name: 'SUNBOI',
            role: 'Programmer',
        },
    ]
</script>

<div class="flex flex-col items-center justify-center">
    <div class="text-4xl py-10">The Team</div>

    <div class="flex flex-col gap-6 text-center max-w-3xl">
        <div>
            Mosaico is made up of four members, the original Bombas. Our first project was Bombatomics, a 5,000 NFT collection of lucha libre fighters sick of machismo.
        </div>
        <div>
            We are all young adults with different jobs and responsibilities, but we believe in the power of creating art showcasing unheard perspectives and cultures in the Web3 space, a place predominantly populated by white male perspectives. We love this project, and hope you do too!
        </div>
    </div>

    <div class="flex p-6 gap-6 justify-center max-w-5xl">
        {#each team as member}
        <div class="flex flex-col justify-center items-center">
            <img src={member.image} alt="" class="rounded-2xl">
            <div class="text-center">
                <div class="font-bold">{member.name}</div>
                <div>{member.role}</div>
            </div>
        </div>
        {/each}
    </div>
</div>