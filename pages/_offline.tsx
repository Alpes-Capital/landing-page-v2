import { Container } from '@p-styles/ErrPages'

const Err404 = () => {
   return (
      <Container>
         <span className="errorText">
            Ops..! Parece que você está offline<br/>
            e infelizmente esta pagina não está disponivel.<br/>
            Se você está procurando o nosso joguinho do dinossauro, <br/> 
            ainda não temos. Mas disponibilizaremos em breve 😉
         </span>
         <span className="errorCode">
            cri... cri... 🦖
         </span>
         <div className='offlineIcon'>
            <img alt='Offline icons'
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFP0lEQVR4nO2dy6scRRSHvzGXXBLjxrdw70KT60LBhRs3mihqTFyIXgwasvQPcCO6k4gm3mQpwffOaF6LKMJFgkjwsRKiCBqfyxsQycNoonEzLmoG5tZUV1d1n67qnjkfnE1P1TlV59fdNV1V0wOKoiiKoiiKoiiKoiiKoiRhjaCvqwR9KcBaYB9wBugL2wqwNIjh4pkGYqawv4HTwNvAQwE59rKUoMFLBbFvTxA7hZ0EFkozXcBKggauFMS+OmGSmrazwH1FSe4VfTConIKiNqSKn4JzwD3Ar/YHOnCm4VrgXdcHKkA6tgAPxlQouqc1Xa7L3AI8D1zB3de3YpypANV5AXdfT8c4UQGqczPuvv5lF6zyLciuI11uUgjqrw7CmZEQ4ILj2HkBv1OBhADvO44dFPA79YQOmuuAN4FLA3tjcKyqv0khqL8Sg7B9vKieDsKGVf2dSRBQ8aDfgjKjAmRGBciMCpCZKoOwDraC6BWQGRUgMz4BziSIX7QoPzX4BHgvQfwUMTrLWsy+nSa2p5RtzJoEas8FxQRyMalzPKHogkwXUAEyowJkRgXIjAqQGRUgMypAZiSXJLvIBmDzwO7E/JjixsFxML94+R34Bfge+Bz4YnC8NXRtt0MP2A4cBf4l/in+H+AIsA3/w+ZvBfXF6ZIAO4DvkJtS+RZYLIh1PfClo444XRBgAfgU+TmtoZ0ANjnirnPEFaftAuzC7EpuKvlDuwjsdMRfjxk7pk6AHrCb5hNv2xLjY8N1mIF8agToYbZIpk7+0F5nXIS7MIO+OG0U4FXSJbvIXna06znpjuJpQC52edqU2p6y2tbIg2+bBFggzYAban8CGxvtsSd4DnxfNZeBuYEd95QLteMj/pY95T5ptMeewKl50tOWPiZRQ2aAwyXlfXaY1dM4cyXlnxDu6yraIECP8ifcOatOVRHs5APMl9T5hgbXyNsgwHZPO0ZvGXbiYkVwJX+GsFvaI0J9HaMNAhzztGPUjjGewDWY/UlldY8W1D0YGPuQUF/HyC3ANcTNahadxb4roUod2y5jpiXEiRUg9p5r2zuWv0cr+Ii5Euqe+aO21ZOXyqQW4FnLX9U3e4Wc1RJn/qjt9eSlMqkFeMDy93ENX74ESye/D3zkyUtlUgtgv4Ptp5r+ihItnfw+kW9LCSW1ADdY/s4K+HSNCaNUvefb9ocnRmVSCzBr+St6OZKUCFLJ7+OYjs6xKyL0ibBIxCtSDQmMV/ZZdmKvAGm/Ercg11fNUUIf1jpxC5L2+6OnbIilHIR/iMxBELkFqPM11PeQVWfaosg+jMxBELkFqLr8mONBbE9kDoLILUDITGjMmW+XlbwSHo7MQRC5BdiA2S4oeeZL1LHtEi2ZjGvC7xFP+apnvvSV8EFU7yNogwDbPOWHlntBppGZUDwBU/rtYTbK+hLQ5JJk2ZrwKVq0JDkL7Kf+P3NssfwulpRvclG+bE34MU8+ahMrwP6SxobaZw7fJzzlh9tS5pHdljKPf1vKsi95EsQKIPmfNJst35swu5Sl/Ne1C8BtJfmrzXlH4HOe8pICfM34/XinoP+6tqMseRIccAR+zVN+n6N8HXvREeMV4RhV7CV/2uQIfXPukFmMCFJvYfkPuNuK0cNsEc+V/APlaZOnR7vekNLDbBGf2DO/KyziHqek7SLwdKI+dY6NmF3KTSV/Gbg1WW86zOOYjbJSiT9Fww9Zk0gPs1H2EGa7YGzSL2Mm1rYiMOa1adDMwXrgXuB+4A7Mf1jexPirCn7GvKrgJPAVRgRFURRFqcX/RQ88C+E1WbcAAAAASUVORK5CYII="/>
         </div>
      </Container>
   )
}

export default Err404