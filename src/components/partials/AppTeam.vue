<script>
export default {


    data() {
        return {
            team_members_names: [
                
                "PIERLUIGI TORNESI",
                "LUDOVICA AGHEMO",
                "DANIEL D'ORAZIO",
                "MARCO GRANATA",
                "CESARE CICOLIN",
            ],
            
            team_members_roles: [
                
                "Il clown",
                "La segretaria innamorata",
                "Il dittatore",
                "Il Napoletano",
                "L'annegato",
            ],
            // team_image: [
            //     "../../assets/img/team-picture.jpg",

            // ],

        };
    },
    created() {
    },
};
</script>

<template>
    <div class="my-wrapper">
        <div class="title">
            <h2 class="text-center">OUR TEAM</h2>
            <p>
                Meet our wonderful team!
            </p>
        </div>
        <!-- <hr> -->
        <div class="team-section d-flex justify-content-center mt-3">
            <div class="team-items row row-cols-5">
                <!-- Prima card -->
               
              <div class="col" v-for="team_members_name in team_members_names">
                <div class="about-member">
                    <h1>{{team_members_name}}</h1>
                </div>

               <img src="" alt="">
                
              </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// @use "../styles/partials/variables" as *;

.my-wrapper {
    background-color: black;
    color: white;
    padding: 1rem;
    width: 100%;

    .team-items {
        // width: calc(25% - 20px);
        // margin-bottom: 20px;


        .img-member {
            max-width: 100%;
            width: 350px;
        }

    }

    li {
        list-style-type: none;

        a {
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>
