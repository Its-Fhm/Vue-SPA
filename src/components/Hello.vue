<template>
<div>
    <b-container fluid class="bv-example-row">
        <b-row>
            <b-col cols="12" md="4" offset-md="2" order="2" order-md="1">
                <div class="col-md-10 col-sm-12 text-justify top-space">
                    <h1>Jonothan Johnson has invited you to join Indie!</h1>
                    <h2 class="top-space">Jonothan got insured recently with Indie and thinks you should join too. Here’s why:</h2>
                    <ol class="indy-list">
                        <li><span>Indie helps you understand what insurance you need with a free Indie Plan.</span></li>
                        <li><span>Get a quote and insured online in just minutes. No call centres, no spam.</span></li>
                        <li><span>Only Indie gives you Bounty – an upfront investment account with a stash of cash on day one.</span></li>
                        <li><span>Get more Bounty when you bring your friends like Jonothan whi will get R1000 when you join Indie</span></li>
                    </ol>
                    <b-button size="lg" class="btn-blue" v-b-modal.modal1><icon-arrow/>Get A Quote</b-button>
                    <p class="help-text">Takes only about 6 minutes</p>
                </div>

            </b-col>
            <b-col cols="12" md="6" order="1" order-md="2" class="no-padding"><img class="side-img" src="../assets/stock-desktop@2x.jpg"></b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import IconArrow from '../components/icons/IconArrow'

export default {
  name: 'hello',
  components: {
    IconArrow
  }
}
</script>

<style lang="scss">
    $indy-blue: #3a93f6;
    h1{
        font-size: 48px;
        font-weight: 800;
        line-height: 1.33;
        color: #222;
        font-family: 'Roboto', sans-serif;
    }
    h2 {
        font-size: 22px;
        font-weight: 600;
        line-height: 1.36;
        color: #637381;
    }
    .top-space {
        margin-top: 50px;
    }
    .side-img {
        max-width:100%;
    }
    .no-padding {
        padding-right: 0;
        padding-left: 0;
    }
    .indy-list {
        margin-top: 30px;
        -webkit-margin-before: 3em;
        -webkit-margin-after: 0;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        -webkit-padding-start: 0px;
        li{
            font-size: 18px;
            line-height: 1.44;
            color: #637381;
            counter-increment: step-counter;
            margin-bottom: 10px;
            margin: 0px;
            &:before{
                content: counter(step-counter);
                margin-right: 5px;
                font-size: 80%;
                background-color: $indy-blue;
                color: white;
                font-weight: bold;
                padding: 3px 8px;
                border-radius: 13px;
            }
            span {
                display: flex;
                margin: -30px 0px 30px 50px;
            }
        }
    }
    .btn-blue {
        background: $indy-blue;
        border-color: $indy-blue;
        width: 100%;
        svg {
            position: relative;
            top: 4px;
            left: -10px;
        }
    }

    .help-text {
        color: #ddd;
        margin-top: 30px;
        text-align: center;
    }
    @media only screen and (min-device-width: 314px) and (max-device-width: 736px)  {
        h1 {
            position: absolute;
            top: -572px;
            z-index: 1;
            font-size: 25px;
            color: #fff;
        }
    }
</style>