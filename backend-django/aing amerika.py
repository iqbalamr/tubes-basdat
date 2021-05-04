from threading import Thread
import time

class olah_data:
    def __init__(self, rentang):
        self.rentang = rentang

    def ambil(self):
        print(f'[1] ambil dari data ke : {self.rentang}')
        time.sleep(2)
        print(f'[1] ambil dari data ke : {self.rentang} selesai')
    def sortir(self):
        print(f'[2] sortir dari data ke : {self.rentang}')
        time.sleep(2)
        print(f'[2] sortir dari data ke : {self.rentang} selesai')
    def export(self):
        print(f'[3] export dari data ke : {self.rentang}')
        time.sleep(2)
        print(f'[3] export dari data ke : {self.rentang} selesai')

    def run(self):
        self.ambil()
        self.sortir()
        self.export()


rents = [
    '1 - 10000', '10001 - 20000', '20001 - 30000'
]

start = time.perf_counter()

for rentang in rents:
    t = Thread(target=olah_data(rentang).run)
    t.start()

t.join()

finish = time.perf_counter()
print(f'selesai dalam {finish - start} detik')

# import time
# import asyncio
#
# class olah_data:
#     def __init__(self, rentang):
#         self.rentang = rentang
#
#     async def ambil(self):
#         print(f'[1] ambil dari data ke : {self.rentang}')
#         await asyncio.sleep(2)
#         print(f'[1] ambil dari data ke : {self.rentang} selesai')
#     async def sortir(self):
#         print(f'[2] sortir dari data ke : {self.rentang}')
#         await asyncio.sleep(2)
#         print(f'[2] sortir dari data ke : {self.rentang} selesai')
#     async def export(self):
#         print(f'[3] export dari data ke : {self.rentang}')
#         await asyncio.sleep(2)
#         print(f'[3] export dari data ke : {self.rentang} selesai')
#
#     async def run(self):
#       t1 = asyncio.create_task(
#           self.ambil())
#       t2 = asyncio.create_task(
#           self.sortir())
#       t3 = asyncio.create_task(
#           self.export())
#       await t1
#       await t2
#       await t3
#
#
# rents = [
#     '1 - 10000', '10001 - 20000', '20001 - 30000'
# ]
#
# start = time.perf_counter()
#
# for rentang in rents:
#   asyncio.run(olah_data(rentang).run())
#
# finish = time.perf_counter()
# print(f'selesai dalam {finish - start} detik')