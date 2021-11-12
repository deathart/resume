<template>
  <div class="bg-gray-300 dark:bg-base-200 rounded-lg p-4 mx-4 lg:mx-0">
    <HeadText
      title="Compétences"
      content="Compétences aquise au fil du temps"
    />
    <section
      class="
        rounded-lg
        flex flex-col
        relative
        overflow-hidden
        text-indigo-300
        body-font
        p-5
        bg-gray-900
        backdrop-filter backdrop-blur-lg
        bg-opacity-20
      "
    >
      <div
        class="
          mx-auto
          flex
          px-5
          lg:flex-row
          flex-col
          items-center
          justify-between
        "
      >
        <div
          class="
            lg:flex-grow lg:w-2/3 lg:pr-24
            pr-0
            flex flex-col
            lg:items-start lg:text-left
            text-center
            mb-16
            lg:mb-0
            items-center
          "
        >
          <div class="pt-10 px-2 lg:px-6">
            <h1
              class="
                title-font
                sm:text-4xl
                text-3xl
                mb-4
                font-medium
                text-gray-100
              "
            >
              Front-end
            </h1>
            <div class="flex flex-col lg:flex-row">
              <div class="lg:flex-grow lg:w-1/2 w-full flex flex-col">
                <p class="mb-4 text-sm text-gray-600">Languages & Framework</p>
                <div class="flex justify-between items-center">
                  <span> HTML </span>
                  <stars :data="5" />
                </div>
                <div class="flex justify-between items-center">
                  <span> CSS </span>
                  <stars :data="4" />
                </div>
                <div class="flex justify-between items-center">
                  <span> JS </span>
                  <stars :data="4" />
                </div>
                <div class="flex justify-between items-center">
                  <span> Vue.JS & Nuxt </span>
                  <stars :data="4" />
                </div>
                <div class="flex justify-between items-center">
                  <span> Angular 2+ </span>
                  <stars :data="4" />
                </div>
                <div class="flex justify-between items-center">
                  <span> React / Preact </span>
                  <stars :data="2" />
                </div>
              </div>
              <div
                class="lg:flex-grow lg:w-1/2 w-full flex flex-col lg:ml-12 ml-0"
              >
                <p class="mb-4 text-sm text-gray-600">Outils & autres</p>
                <div class="flex justify-between items-center">
                  <span> TypeScript </span>
                  <stars :data="4" />
                </div>
                <div class="flex justify-between items-center">
                  <span> SCSS </span>
                  <stars :data="5" />
                </div>
                <div class="flex justify-between items-center">
                  <span> WebPack </span>
                  <stars :data="4" />
                </div>
                <div class="flex justify-between items-center">
                  <span> SEO </span>
                  <stars :data="4" />
                </div>
                <div class="flex justify-between items-center">
                  <span> Prebid </span>
                  <stars :data="4" />
                </div>
                <div class="flex justify-between items-center">
                  <span> Vuetify </span>
                  <stars :data="4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-1/3 w-5/6 lg:block hidden">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="/frontendstack.png"
          />
        </div>
      </div>
    </section>
    <section
      class="
        rounded-lg
        flex flex-col
        relative
        overflow-hidden
        text-indigo-300
        body-font
        p-5
        bg-gray-900
        backdrop-filter backdrop-blur-lg
        bg-opacity-20
        mt-4
      "
    >
      <div
        class="
          mx-auto
          flex
          px-5
          lg:flex-row
          flex-col
          items-center
          justify-between
        "
      >
        <div class="lg:max-w-lg lg:w-1/3 w-5/6 lg:block hidden">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="/frontendstack.png"
          />
        </div>
        <div
          class="
            lg:flex-grow lg:w-2/3 lg:pl-24
            pl-0
            flex flex-col
            lg:items-start lg:text-left
            mb-16
            lg:mb-0
          "
        >
          <div
            class="pt-10 px-2 lg:px-6 flex flex-col justify-end lg:ml-auto ml-0"
          >
            <h1
              class="
                title-font
                lg:text-4xl
                text-3xl
                mb-4
                font-medium
                text-gray-100 text-right
              "
            >
              Back-end
            </h1>
            <div class="flex flex-col lg:flex-row">
              <div class="lg:flex-grow lg:w-1/3 w-full flex flex-col">
                <p class="mb-4 text-sm text-gray-600">Languages</p>
                <div class="flex justify-between items-center">
                  <span> PHP </span>
                  <stars :data="4" />
                </div>
                <div class="flex justify-between items-center">
                  <span> Node.JS </span>
                  <stars :data="4" />
                </div>
                <div class="flex justify-between items-center">
                  <span> Python </span>
                  <stars :data="1" />
                </div>
                <div class="flex justify-between items-center">
                  <span> C# </span>
                  <stars :data="2" />
                </div>
                <div class="flex justify-between items-center">
                  <span> Lua </span>
                  <stars :data="3" />
                </div>
              </div>
              <div
                class="lg:flex-grow lg:w-1/3 w-full flex flex-col lg:ml-12 ml-0"
              >
                <p class="mb-4 text-sm text-gray-600">Framework & outils</p>
                <div class="flex justify-between items-center">
                  <span> Symfony </span>
                  <stars :data="4" />
                </div>
                <div class="flex justify-between items-center">
                  <span> Laravel </span>
                  <stars :data="2" />
                </div>
                <div class="flex justify-between items-center">
                  <span> CodeIgniter </span>
                  <stars :data="4" />
                </div>
                <div class="flex justify-between items-center">
                  <span> NestJS </span>
                  <stars :data="5" />
                </div>
                <div class="flex justify-between items-center">
                  <span> Rest API </span>
                  <stars :data="5" />
                </div>
              </div>
              <div
                class="lg:flex-grow lg:w-1/3 w-full flex flex-col lg:ml-12 ml-0"
              >
                <p class="mb-4 text-sm text-gray-600">Base de donnée</p>
                <div class="flex justify-between items-center">
                  <span> MongoDB </span>
                  <stars :data="3" />
                </div>
                <div class="flex justify-between items-center">
                  <span> MySQL </span>
                  <stars :data="3" />
                </div>
                <div class="flex justify-between items-center">
                  <span> Redis </span>
                  <stars :data="2" />
                </div>
                <div class="flex justify-between items-center">
                  <span> ElasticSearch </span>
                  <stars :data="1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="
        rounded-lg
        flex flex-col
        relative
        overflow-hidden
        text-indigo-300
        body-font
        p-5
        bg-gray-900
        backdrop-filter backdrop-blur-lg
        bg-opacity-20
        mt-4
      "
    >
      <div
        class="
          mx-auto
          flex
          px-5
          lg:flex-row
          flex-col
          items-center
          justify-between
        "
      >
        <div
          class="
            lg:flex-grow lg:w-2/3
            pr-24 pr-0
            flex flex-col
            lg:items-start lg:text-left
            mb-16
            lg:mb-0
            items-center
          "
        >
          <div class="visible">
            <div class="pt-10 lg:px-2 px-6">
              <h1
                class="
                  title-font
                  sm:text-4xl
                  text-3xl
                  mb-4
                  font-medium
                  text-gray-100
                "
              >
                Infra & Matériel
              </h1>
              <div class="flex flex-col lg:flex-row">
                <div class="lg:flex-grow lg:w-1/2 w-full flex flex-col">
                  <p class="mb-4 text-sm text-gray-600">Environnement</p>
                  <div class="flex justify-between items-center">
                    <span> Windows </span>
                    <stars :data="5" />
                  </div>
                  <div class="flex justify-between items-center">
                    <span> Linux (Debian & ubuntu) </span>
                    <stars :data="3" />
                  </div>
                  <div class="flex justify-between items-center">
                    <span> Docker (Kubernetes) </span>
                    <stars :data="3" />
                  </div>
                  <div class="flex justify-between items-center">
                    <span> OSX </span>
                    <stars :data="3" />
                  </div>
                </div>
                <div
                  class="
                    lg:flex-grow lg:w-1/2
                    w-full
                    flex flex-col
                    lg:ml-12
                    ml-0
                  "
                >
                  <p class="mb-4 text-sm text-gray-600">Outils & autres</p>
                  <div class="flex justify-between items-center">
                    <span> Git (Github & gitlab) </span>
                    <stars :data="4" />
                  </div>
                  <div class="flex justify-between items-center">
                    <span> CI-CD </span>
                    <stars :data="4" />
                  </div>
                  <div class="flex justify-between items-center">
                    <span> Scrum (Agile) </span>
                    <stars :data="4" />
                  </div>
                  <div class="flex justify-between items-center">
                    <span> VSCode, PHPStorm </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-1/3 w-5/6 lg:block hidden">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="/frontendstack.png"
          />
        </div>
      </div>
    </section>
  </div>
</template>
