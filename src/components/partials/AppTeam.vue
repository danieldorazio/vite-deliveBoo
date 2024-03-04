<script>
export default {


    data() {
        return {
            team_members_names: [
                "DANIEL D'ORAZIO",
                "PIERLUIGI TORNESI",
                "LUDOVICA AGHEMO",
                "MARCO GRANATA",
                "CESARE CICOLIN",
            ],
            team_members_roles: [
                "Il dittatore",
                "Il clown",
                "La segretaria innamorata",
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
            <div class="team-items row">
                <!-- Prima card -->
                <div class="col-lg-12 col-md-12 col-sm-12 mb-4" v-if="team_members_names.length > 0">
                    <div class="team-member text-center">
                        <img class="img-member" src="../../assets/img/daniel.jpg" alt="">
                        <h3 class="mt-3">{{ team_members_names[0] }}</h3>
                        <p>{{ team_members_roles[0] }}</p>
                        <p class="team-socials">
                            <a class="" href="#">
                                <i class="fa-brands fa-github" style="color: #ffcc33;"></i>
                            </a>
                        </p>
                    </div>
                </div>

                <!-- Altre quattro carte in due righe da due -->
                <div class="col-lg-6 col-md-6 col-sm-12" v-for="(team_member_name, index) in team_members_names.slice(1, 3)"
                    :key="index + 1">
                    <div class="team-member text-center">
                        <img class="img-member" src="../../assets/img/team-picture.jpg" alt="">
                        <h3 class="mt-3">{{ team_member_name }}</h3>
                        <p>{{ team_members_roles[index] }}</p>
                        <p class="team-socials">
                            <a class="" href="#">
                                <i class="fa-brands fa-github" style="color: #ffcc33;"></i>
                            </a>
                        </p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12" v-for="(team_member_name, index) in team_members_names.slice(3)"
                    :key="index + 3">
                    <div class="team-member text-center">
                        <img class="img-member" src="../../assets/img/team-picture.jpg" alt="">
                        <h3 class="mt-3">{{ team_member_name }}</h3>
                        <p>{{ team_members_roles[index + 2] }}</p>
                        <p class="team-socials">
                            <a class="" href="#">
                                <i class="fa-brands fa-github" style="color: #ffcc33;"></i>
                            </a>
                        </p>
                    </div>
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
            width: 700px;
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
