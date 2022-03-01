<template>
    <div>
        name repo {{ selectedRepo }}
        <ul
            role="listbox"
            id="jump-to-results"
            class="
                p-0
                m-0
                js-navigation-container
                jump-to-suggestions-results-container
                js-jump-to-suggestions-results-container
                js-active-navigation-container
            "
        >
            <li
                v-for="(place, index) in dataRepos"
                :key="index"
                @click="selected(place.name)"
                style="cursor: pointer"
                class="
                    flex
                    justify-start
                    items-center
                    p-0
                    text-sm
                    navigation-item
                    js-navigation-item js-jump-to-suggestion
                    navigation-focus
                "
            >
                <router-link to="">{{ place.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const dataRepos = ref([])
        const selectedRepo = ref(null)
        const router = useRouter()

        axios
            .get('https://api.github.com/users/dimaswntech/repos', {
                headers: {
                    Authorization:
                        'token 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',
                },
                owner: 'dimaswntech',
            })
            .then((response) => {
                dataRepos.value = response.data
            })

        const selected = (data) => {
            selectedRepo.value = data
            router.push({ path: `/repo/${data}` })
        }
        console.log(selectedRepo)
        return {
            dataRepos,
            selected,
            selectedRepo,
        }
    },
}
</script>

<style scoped>
* {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    box-sizing: border-box;
}
.Header {
    background: #24292f;
    z-index: 32;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.7);
    align-items: center;
    flex-wrap: nowrap;
}
.Header-item {
    display: flex;
    margin-right: 16px;
    align-self: stretch;
    align-items: center;
    flex-wrap: nowrap;
}
.Header-item--full {
    flex: auto;
}
.Header-link {
    font-weight: 600;
    color: #ffffff;
    white-space: nowrap;
}
.dropdown-caret {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: '';
    border-style: solid;
    border-width: 4px 4px 0;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
}
.details-reset > summary {
    list-style: none;
}
details summary {
    cursor: pointer;
}
summary {
    display: list-item;
}
.octicon {
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    /* fill: currentColor; */
}
.avatar {
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    background-color: #ffffff;
    border-radius: 6px;
    flex-shrink: 0;
    box-shadow: rgba(27, 31, 36, 0.15);
}
.circle {
    border-radius: 50% !important;
}
/* .input-sm {
    min-height: 28px;
} */
.header-search {
    max-width: 100%;
    max-width: 296px;
    transition: 0.2s ease-in-out;
    transition-property: max-width, padding-bottom, padding-top;
}

.header-search-input {
    display: table-cell;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    font-size: inherit;
    color: inherit;
    background: none;
    border: 0;
    box-shadow: none;
}
.form-control {
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    outline: none;
    box-shadow: var(--color-primer-shadow-inset);
}
.form-control:focus {
    border-color: #0969da;
    outline: none;
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.3);
}
.header-search-wrapper {
    /* display: table; */
    width: 100%;
    max-width: 100%;
    padding: 0;
    font-size: inherit;
    font-weight: 400;
    color: #ffffff;
    vertical-align: middle;
    background-color: #24292f;
    border: 1px solid #57660a;
    box-shadow: none;
}
.header-search-wrapper:focus {
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0.175);
}
.header-search-input {
    display: table-cell;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    font-size: inherit;
    color: inherit;
    background: none;
    border: 0;
    box-shadow: none;
}
.input-sm {
    min-height: 28px;
}
@media (min-width: 768px) {
    .header-search:focus-within {
        max-width: 544px;
    }
}
.jump-to-field-active:focus {
    color: #24292f !important;
    background-color: #f6f8fa;
}
.jump-to-field-active.jump-to-dropdown-visible:focus {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.header-search-input:focus ~ .header-search-key-slash {
    display: none !important;
}
.Box {
    background-color: #ffffff;
    border-color: #d0d7de;
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;
}
.jump-to-suggestions {
    top: 100%;
    left: 0;
    z-index: 35;
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
    height: 260px;
    /* overflow-y: scroll; */
}
.jump-to-suggestions-results-container .navigation-item {
    border-bottom: 1px solid #d0d7de;
}
.jump-to-suggestions-path .jump-to-suggestion-name {
    max-width: none;
}
.css-truncate.css-truncate-target,
.css-truncate .css-truncate-target {
    display: inline-block;
    max-width: 125px;
    vertical-align: top;
}
.css-truncate.css-truncate-overflow,
.css-truncate .css-truncate-overflow,
.css-truncate.css-truncate-target,
.css-truncate .css-truncate-target {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.name-repo {
    color: #24292f;
    min-width: 0;
    min-height: 44px;
}
.jump-to-suggestions-path .jump-to-octicon {
    width: 28px;
    color: #57660a;
}
.dropdown-menu-sw {
    right: 0;
    left: auto;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: -136px;
    z-index: 100;
    width: 160px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-top: 2px;
    list-style: none;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
}
.dropdown-item {
    display: block;
    padding: 4px 8px 4px 16px;
    overflow: hidden;
    color: #24292f;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.header-nav-current-user {
    padding-bottom: 0;
    font-size: inherit;
}
.header-nav-current-user .css-truncate-target {
    max-width: 100%;
}
.header-nav-current-user .user-profile-link {
    color: #24292f;
}
.dropdown-divider {
    display: block;
    height: 0;
    margin: 8px 0;
    border-top: 1px solid #d0d7de;
}
.lh-condensed {
    line-height: 1.25 !important;
}
.user-status-container,
.user-status-container .team-mention,
.user-status-container .user-mention {
    white-space: normal;
}
.user-status-container {
    word-break: break-word;
    word-wrap: break-word;
}
.rounded-2 {
    border-radius: 6px !important;
}
.jump-to-suggestions-results-container
    [aria-selected='true']
    .jump-to-suggestions-path,
.jump-to-suggestions-results-container
    .navigation-focus
    .jump-to-suggestions-path:hover {
    color: #ffffff;
    background: #0969da;
}
.jump-to-suggestions-results-container [aria-selected='true'] .jump-to-octicon,
.jump-to-suggestions-results-container .navigation-focus .jump-to-octicon {
    color: #ffffff;
}
</style>
