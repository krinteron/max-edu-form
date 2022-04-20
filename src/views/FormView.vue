<template>
  <form class="container">
    <FormField label="Ваш филиал" required>
      <SelectComponent
        placeholder="Выберите город"
        :options="cities"
        v-model="city"
      />
      <CheckboxComponent label="Онлайн" v-model="city" />
    </FormField>
    <FormField label="Тема обращения" required>
      <RadioComponent :options="subjectOptions" v-model="subject" />
      <InputComponent
        class="input"
        placeholder="Другое"
        :options="subjectOptions"
        v-model="subject"
      />
    </FormField>
    <FormField label="Описание проблемы" required>
      <textarea
        class="textarea-issue"
        v-model="issue"
        placeholder="Введите текст"
      />
    </FormField>
    <FormField label="Загрузка документов">
      <p>
        Приложите, пожалуйста, полноэкранный скриншот.<br />Это поможет быстрее
        решить проблему.
      </p>
      <input @change="onFileChange" type="file" />
    </FormField>
    <FormField label="Загрузка документов" required>
      <OrangeButton
        text="отправить"
        :disabled="!formIsValid"
        @click="submitForm"
      />
    </FormField>
  </form>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import FormField from '@/components/FormField.vue';
import SelectComponent from '@/components/SelectComponent.vue';
import CheckboxComponent from '@/components/CheckboxComponent.vue';
import RadioComponent from '@/components/RadioComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import OrangeButton from '@/components/OrangeButton.vue';
export default {
  name: 'FormView',
  components: {
    FormField,
    CheckboxComponent,
    SelectComponent,
    RadioComponent,
    InputComponent,
    OrangeButton,
  },
  data() {
    return {
      city: null,
      subject: '',
      issue: '',
      attachment: null,
    };
  },

  computed: mapState({
    formIsValid() {
      return this.city && this.subject && this.issue && !this.sending;
    },
    cities: (state) => state.cities,
    subjectOptions: (state) => state.subjectOptions,
    sending: (state) => state.sending,
  }),

  async created() {
    await this.$store.dispatch('fetchCities');
  },

  methods: {
    onFileChange(event) {
      if (!event.target.files.length) {
        this.attachment = null;
        return;
      }
      this.attachment = event.target.files[0];
    },

    async submitForm() {
      const formData = {
        city: this.city,
        subject: this.subject,
        issue: this.issue,
        attachment: this.attachment,
      };
      const status = await this.$store.dispatch('sendForm', formData);
      if (status) {
        return this.$router.push('success');
      }
      alert('Ошибка отправки заявки');
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}

.textarea-issue {
  box-sizing: border-box;
  font-family: inherit;
  font-size: 14px;
  padding: 10px;
  width: 100%;
  height: 120px;
  border: 1px solid #e1e1e1;
  outline-color: dimgray;
  resize: none;
}
</style>
