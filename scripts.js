// Vue.js Application for Claude Code Webinaari

const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Claude Code Webinaari',
            description: 'A modern static website built with Vue.js and Tailwind CSS',
            items: [],
            newItem: ''
        }
    },
    methods: {
        addItem() {
            if (this.newItem.trim()) {
                this.items.push(this.newItem.trim());
                this.newItem = '';
            }
        },
        removeItem(index) {
            this.items.splice(index, 1);
        }
    },
    mounted() {
        console.log('Vue app mounted successfully!');
        console.log('Website: Claude Code Webinaari');
    }
}).mount('#app');
