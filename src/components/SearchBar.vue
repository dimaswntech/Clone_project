<template>
    <div class="wrapper">
        <div class="search-input">
            <a href="" target="_blank" hidden></a>
            <input
                type="text"
                @focus="magic_flag = true"
                @blur="magic_flag = false"
                class="input-search searchtag"
                v-model="repoInput"
            />
            <div v-if="magic_flag" class="autocom-box">
                <!-- <li v-if="repoInput.value === ''">No data</li> -->
                <ul>
                    <li
                        @click="selected(repo)"
                        style="cursor: pointer"
                        v-for="repo in filteredRepo"
                        :key="repo"
                    >
                        <router-link :to="`/repo/${repo.name}`">{{
                            repo.name
                        }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="icon"></div>
        </div>
        <!-- {{ dataRepo }} -->
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const dataRepo = ref([])
        const repoInput = ref('')
        const magic_flag = ref(false)
        const test = ref('')

        const detail = () => {
            router.push(`/repo/${filteredRepo.value.name}`)
        }

        const selected = (data) => {
            test.value = data
        }
        console.log(test)
        axios
            .get('https://api.github.com/users/dimaswntech/repos', {
                headers: {
                    Authorization:
                        'token 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',
                },
                owner: 'dimaswntech',
            })
            .then((response) => {
                dataRepo.value = response.data
            })
        const filteredRepo = computed(() => {
            const query = repoInput.value.toLowerCase()
            if (repoInput.value === '') {
                return dataRepo.value
            }
            if (repoInput.value === null) {
                for (const i = 0; i <= 5; i++) {
                    return dataRepo[i].value
                }
            }
            return dataRepo.value.filter((repo) => {
                return Object.values(repo).some((word) =>
                    String(word).toLowerCase().includes(query)
                )
            })
        })

        return {
            dataRepo,
            repoInput,
            filteredRepo,
            magic_flag,
            test,
            detail,
            selected,
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.search-input input {
    height: 55px;
    width: 300px;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0 60px 0 20px;
    font-size: 18px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}

.autocom-box li {
    list-style: none;
    padding: 8px 12px;
    width: 100%;
    cursor: default;
    border-radius: 3px;
    color: black;
    background: aliceblue;
}
.input-search {
    background-color: blanchedalmond;
    transition: 0.5s;
}
.searchtag:focus {
    background-color: antiquewhite;
    width: 500px;
}

/* .search-input .autocom-box li:focus {
    display: block;
} */
/* .autocom-box li:hover {
    background: #efefef;
} */
</style>
