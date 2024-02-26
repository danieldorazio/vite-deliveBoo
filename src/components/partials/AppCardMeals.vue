<script>
</script>

<template>
<div class="container-meals position-relative d-flex justify-content-center align-itmes-center flex-wrap gap-5">
    <div class="my-card-meals position-relative">
        <div class="img-bx">
            <img src="../../assets/img/Pizza_Margherita.jpg" alt="">
        </div>
        <!-- <p>Lorem ipsum dolor <br>
            sit amet consectetur <br>
             adipisicing elit . </p> -->
             <div class="pier">
                  <p>ciao</p>
             <p>abel</p>
             <p>lipi</p>
             </div>
             <h2>PIATTO</h2>
           

    </div>

</div>
</template>

<style lang="scss" scoped>
    .container-meals{
        .my-card-meals{
            width: 320px;
            height: 250px;
            background-color: #ffff;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
            transition: 0.5s ;

            h2{
                position: absolute;
                bottom: 8px;
                color: black;
                transition: 0.5;
                font-weight: 600;
            }
            .pier{
                position: relative;
                padding: 40px;
                text-align: center;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-50px);
                transition: 0.5s;
            }

            &:hover{
                height: 350px;

                h2{
                    padding: 5px 25px;
                    background: linear-gradient(90deg, #F8E16C 0%, #FAA343 100%);
                    bottom: -25px;
                    border-radius: 15px;
                    box-shadow: 0 0 0 10px #FAA343 ;
                }
                .pier{
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(40px)
                }
                .img-bx{
                    inset: -50px 60px 250px 60px;
                    box-shadow: 0 0 0 10px #FAA343;
                    
                    &::before{
                        opacity: 1;
                        transform:  translateY(50px);
                    }

                    &::after{
                        opacity: 1;
                        transform:  translateY(50px);
                    }
                }
            }
            

            .img-bx{
                position: absolute;
                inset: 20px 20px 50px 20px;
                background: #f00;
                border-radius: 15px;
                transition: 0.5s;

                &::before{
                content:'';
                position: absolute;
                width: 20px;
                height: 20px;
                background: transparent;
                left: -30px;
                border-top-right-radius: 20px;
                transform: translateY(-100px);
                opacity: 0;
                box-shadow: 5px -5px 0 4px #FAA343;
                pointer-events: none;
                transition: 0.5s;
            }
                &::after{
                content:'';
                position: absolute;
                width: 20px;
                height: 20px;
                background: transparent;
                right: -30px;
                border-top-left-radius: 20px;
                transform: translateY(-100px);
                opacity: 0;
                box-shadow: -5px -5px 0 4px #FAA343;
                pointer-events: none;
                transition: 0.5s;
            }

                img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 15px;
                }
            }
            
        }
    }
</style>